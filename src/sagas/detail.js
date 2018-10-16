import { mapActionToSagas,sagaify } from 'common/action-saga'
import { DETAIL } from 'constant/action-types'
import { call, put, takeLatest } from 'redux-saga/effects'


export default mapActionToSagas(DETAIL)
