import React, {Component} from 'react';
import { dfmt } from 'common/util'

const MS = 1000;
const dateFmt = 'YYYY年MM月DD日 HH:mm:ss'
export default class NowTime extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: dfmt(Date.now(),dateFmt),
    }
    this.timer = null;
}
    componentWillMount() {
        this._updateTime()
    }
    componentWillUnmount(){
      clearInterval(this.timer)
    }
    _updateTime = () => {
      this.timer = setInterval(_ =>{
        this.setState({
          date: dfmt(Date.now(),dateFmt)
        })
      },MS)
    }
    render() {
        return (
            <p className='now_time'>{this.state.date}</p>
        );
    }
}
