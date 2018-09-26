import React, { Component } from 'react';
import  { Link }  from  'react-router-dom';

const letters = ['A','B','J','K']

export default class BusinessBtn extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    const { leader,BusinessGroups,index,exception } = this.props;

    const NotLink = ({text,exception}) =>(
       <button className={exception?'color-red':'color-blue'}>{text}</button>
    )

    const BtnNo = (props) => {
      const { text, leader, groupIndex} = props;
      let groupIndexCopy = groupIndex;
      return (
          <div className='btn_no'>
            {index === 0 ? <div className="left_no">{leader?1:groupIndexCopy+2}</div> : null }
            {
              leader? <NotLink {...props}/> :
              !text?<button className='color-gray'>{text}</button>:
              <Link to="/storage/chart">
                <NotLink {...props}/>
              </Link>
            }
            {index === letters.length-1 ? <div className="right_no">{leader?1:groupIndexCopy+2}</div> : null }
          </div>
      );
    }
    return (
      <div className={`btn_${letters[index]}`}>
        <div className='business_leader'>
          <p className='business_leader_p'>{letters[index]}</p>
          <BtnNo text={leader} leader={true} exception={exception}/>
        </div>
        <div>
          {
            BusinessGroups.map(({group, exception},index) => (
              <BtnNo text={group} groupIndex={index} exception={exception}/>
            ))
          }
        </div>
      </div>
    );
  }
}
