import actions from './path';
export { DETAIL, HOME } from './path';

const obj = {};

(function mapAction(actionSet, prefix = []) {
 Object.entries(actionSet).forEach(([k, v]) => {
  const action = prefix.concat(k);
  if (typeof v === 'object') {
   obj[k] = actionSet[k];
   mapAction(v, action);
  } else {
   const fn = () => {}; // walkaround for redux-saga pattern
   fn.toString = () => action.join('/'); // TODO: use prototype to save memory ?
   fn.API = v;
   fn.OK = `${k}_OK`;
   fn.NOK = `${k}_NOK`;
   obj[action[0]][k] = fn;
  }
 });
}(actions));

export default actions;
