import React , { Fragment } from 'react';
import { connect } from 'react-redux'
// import { Menu, Icon, Button } from 'common/my_antd';
import { HOME } from 'constant/action-types'
import SelectGroup from 'component/detail/select-group'
import BarChart from 'component/detail/bar-chart'

@connect(
  state => ({
    collapsed: state.home.collapsed
  })
)
export default class LeftMenu extends React.Component {

  render() {

    return (
      <Fragment>
        <BarChart/>
        <ul className='detail_average'>
          <li>
            <h3>近28日均量</h3>
            <p>530</p>
          </li>
          <li>
            <h3>近28日均量</h3>
            <p>530</p>
          </li>
          <li>
            <h3>近28日均量</h3>
            <p>530</p>
          </li>
          <li>
            <h3>近28日均量</h3>
            <p>530</p>
          </li>
          <li>
            <h3>近28日均量</h3>
            <p>530</p>
          </li>
          <li>
            <h3>近28日均量</h3>
            <p>530</p>
          </li>
          <li>
            <h3>近28日均量</h3>
            <p>530</p>
          </li>
          <li>
            <h3>近28日均量</h3>
            <p>530</p>
          </li>
          <li>
            <h3>近28日均量</h3>
            <p>530</p>
          </li>
          <li>
            <h3>近28日均量</h3>
            <p>530</p>
          </li>
        </ul>
      </Fragment>
    );
  }
}
