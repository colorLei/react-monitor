import { call , put, takeEvery} from 'redux-saga/effects';
import { message } from 'antd';
import xhr from 'common/api';


function* base({ action, callback = ()=>{}, ...payload }) {
 try {
  const data = yield call(xhr,{url:action.API,...payload});
  yield put({ type: action.OK, payload: data });
  callback(data, payload);
 } catch (e) {
  message.error(e);
  yield put({ type: action.NOK, message: e });
 }
}

export function* watch_ajax() {
 yield takeEvery('XHR_REQ', base);
}
