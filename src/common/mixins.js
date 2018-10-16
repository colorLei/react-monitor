import {DETAIL} from 'constant/action-types'

const actionType = {
  ['1'] :'GET_TENDENCY_DETAIL',
  ['2'] :'GET_HOURS_LIST'
}
export const detailMixins = (hostryMark) => (target) => {
  Object.assign(target.prototype, {
    componentDidMount() {
        this.init()
    },
    componentWillUnmount(){
      const { dispatch } = this.props;
      dispatch({
        type: DETAIL.SET_DETAIL_PAGE_ACTIVE.toString(),
        hostryMark:true,
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
    },
    init(){
        const { dispatch, match:{ params }} = this.props;
        dispatch({
            type: DETAIL.GET_LEVEL_NAME.toString(),
            data: params,
            method: 'post',
            callback:this.getDetail.bind(this)
        })
        dispatch({
          type: DETAIL.SET_DETAIL_PAGE_ACTIVE.toString(),
          hostryMark
      })
    },
    getDetail({data:{levelOne,levelTwo,levelThree}})  {
       const { dispatch,hostryMark } = this.props
        dispatch({
            type: DETAIL[actionType[hostryMark]].toString(),
            data: {
                primaryType: levelOne.code,
                secondaryType: levelTwo.code,
                tertiaryType: levelThree.code,
                hostryMark
            },
            method: 'post'
        })
    }
  })
}

