
import { handleActions } from 'redux-actions'
import { HOME } from 'constant/action-types'

export default handleActions({
  [HOME.GET_EXCEPTION_LIST.OK](state,{ payload }){
    return { ...state, exceptionList: payload.data }
  },
  [HOME.GET_LEADER_AND_GROUP.OK](state,{ payload }){
    return { ...state, leaderAndGroupList: payload.data}
  },
  [HOME.GET_CHARTS_LIST.OK](state,{ payload }){
    return { ...state, chartsList: payload.data }
  }
},{
  exceptionList: [],
  leaderAndGroupList: [],
  chartsList:{
    line:[],
    bar:[],
    pie:[],
  }
})
