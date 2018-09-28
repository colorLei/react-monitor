
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
},{
  levelOne:[],
  levelTwo:[],
  levelThree:[],
  active:{
    typeOne:{
      name:"国内",
      code:1
    },
    typeTwo:{
      name:"票量",
      code:1
    },
    typeThree:{
      name:"全部",
      code:0
    },
  }
})
