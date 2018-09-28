import { all } from 'redux-saga/effects';
import HOME from './home';
import DETAIL from './detail';

export default function* () {
 yield all([
   ...HOME,
   ...DETAIL
 ]);
}
