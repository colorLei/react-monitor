import React , { Fragment } from 'react';
import { connect } from 'react-redux'
import { DETAIL } from 'constant/action-types'
import BarChart from 'component/detail/bar-chart'

@connect(
  state => ({
    tendencyDetail: state.DETAIL.tendencyDetail
  })
)
export default class LeftMenu extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount(){
    this.getTendencyDetail()
  }
  getTendencyDetail(){
    const {dispatch} = this.props
    dispatch({
      type: DETAIL.GET_TENDENCY_DETAIL.toString()
    })
  }
  render() {
    const {tendencyDetail:{average,sevenAverage,arangeData}} = this.props
    return (
      <Fragment>
        <BarChart/>
        <ul className='detail_average'>
          <li>
            <h3>近28日均量</h3>
            <p>{average}</p>
          </li>
          <li>
            <h3>近28日均量</h3>
            <p>{sevenAverage}</p>
          </li>
          {
            arangeData.map(({date,week,orderNumber}) =>(
              <li>
                <h3>{date}{week}</h3>
                <p>{orderNumber}</p>
              </li>
            ))
          }
        </ul>
      </Fragment>
    );
  }
}
