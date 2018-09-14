import { handleActions } from 'redux-actions'
import { CHNAGE_QUMENU_COLLAPSED } from 'constant/action-types'

export default handleActions({
  [CHNAGE_QUMENU_COLLAPSED](state,action){
     return {collapsed:!state.collapsed}
  }
},{ 
  collapsed: false 
})