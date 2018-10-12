import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "echarts/lib/chart/pie";
import { renderChart, nfmt, deepCopyObject} from 'common/util'
import { pieConf } from 'common/chartConf'
import { selectAll, routerConf } from 'common/config'

export default class AreaChart extends Component{
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this._setChartOptions()
  }
  _setChartOptions = _ => {
    const { id, data } = this.props;
    const option = deepCopyObject(pieConf);
    option.series[0].data = data;
    renderChart(option,id,'pie')
  }
  render(){
    const { id, levelOne, category } = this.props;
    return (
      <div className='pie_chart'>
        <div className='pie_data'>
          <label>{category.name}创建总量</label>
          <Link to={{
                            pathname: `${routerConf.detail}${levelOne.code}/${category.code}/${selectAll.code}`,
                            state: {
                                activeOne:levelOne,
                                activeTwo:category,
                                activeThree:selectAll
                            }
                    }}><span>{nfmt(category.value)}</span></Link>
        </div>
        <div className='pie_charts'  id={id}></div>
      </div>
    );
  }
}
