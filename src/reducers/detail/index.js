
import { handleActions } from 'redux-actions'
import { DETAIL } from 'constant/action-types'

export default handleActions({
  [DETAIL.GET_LEVELONE_LIST.OK](state,{ payload }){
    return { ...state, levelOne: payload.data }
  },
  [DETAIL.GET_LEVELTWO_LIST.OK](state,{ payload }){
    return { ...state, levelTwo: payload.data }
  },
  [DETAIL.GET_LEVELTHREE_LIST.OK](state,{ payload }){
    return { ...state, levelThree: payload.data }
  },
  [DETAIL.SET_LEVELS_DATA](state,{ type, ...payload}){
    return { ...state,...payload }
  },
  [DETAIL.CLEAR_LEVELTHREE_LIST](state){
    return { ...state,levelThree:[] }
  },
  [DETAIL.GET_HOURS_LIST.OK](state,{ payload }){
    return { ...state, hoursList: payload.data }
  },
  [DETAIL.GET_TENDENCY_DETAIL.OK](state,{ payload }){
    return { ...state, tendencyDetail: payload.data }
  },
},{
  levelOne:[],
  levelTwo:[],
  levelThree:[],
  activeOne:{
    name:"国内",
    code:1
  },
  activeTwo:{
    name:"票量",
    code:1
  },
  activeThree:{
     name:"全部",
     code:'all'
  },
  hoursList:[],
  tendencyDetail:{
    arangeData:[]
  }
})
