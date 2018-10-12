
import { handleActions } from 'redux-actions'
import { DETAIL } from 'constant/action-types'
import { DetailRoutes } from 'common/config'

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
  [DETAIL.SET_DETAIL_PAGE_ACTIVE](state,{ type, ...payload}){
    return { ...state,...payload}
  },
  [DETAIL.CLEAR_LEVELTHREE_LIST](state){
    return { ...state,levelThree:[] }
  },
  [DETAIL.GET_HOURS_LIST.OK](state,{ payload }){
    return { ...state, hoursList: payload.data }
  },
  [DETAIL.GET_TENDENCY_DETAIL.OK](state,{ payload }){
    return { ...state, tendencyDetail: payload.data[0] }
  },
  [DETAIL.GET_LEVEL_NAME.OK](state,{ payload }){
    const { levelOne,levelTwo,levelThree } = payload.data;
    const param = `${levelOne.code}/${levelTwo.code}/${levelThree.code}`;
    const detailRoutesConf = DetailRoutes.map(v => {
            return {
                ...v,
                path: v.path + param
            }
    })
    return { 
              ...state,
              activeOne:levelOne,
              activeTwo:levelTwo,
              activeThree:levelThree,
              detailRoutesConf
          }
  },
  [DETAIL.GET_LEVEL_NAME.NOK](state,{ payload }){
    return { ...state,hostryMark:false}
  },
},{
  levelOne:[],
  levelTwo:[],
  levelThree:[],
  activeOne:{},
  activeTwo:{},
  activeThree:{},
  hoursList:[],
  tendencyDetail:{
    days:[]
  },
  hostryMark:true,
  detailRoutesConf:[]
})
