import { all } from 'redux-saga/effects';
import { watch_ajax } from './common';
export default function* () {
 yield all([
  watch_ajax()
 ]);
}
