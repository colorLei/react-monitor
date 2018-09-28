import xhr from 'common/api'
import { message } from 'antd';
import { call, put, takeLatest } from 'redux-saga/effects'

function* base(action, { type, callback = ()=>{}, ...payload }) {
    try {
        const data = yield call(xhr, {url:action.API, ...payload})
        yield put({ type: action.OK, payload: data })
        callback(data, payload)
    } catch (e) {
        message.error(e);
        yield put({ type: action.NOK, message: e })
    }
}

export function sagaify(action, handler = base, effect = takeLatest) {
    if (action.saga) {
        console.warn(`${action.type}'s saga already registered!`)
    } else {
        action.saga = effect(action, function* (...args) {
            yield* handler.apply(null, [action, ...args])
        })
    }
    return action.saga
}

export function mapActionToSagas(action, sagas = []) {
    Object.entries(action).forEach(([k, v]) => {
        if (typeof v === 'object') {
            mapActionToSagas(v, sagas)
        } else if (v.saga) {
            sagas.push(v.saga)
        } else if (v.API) {
            v.saga = sagaify(v)
            sagas.push(v.saga)
        }
    })
    return sagas
}
