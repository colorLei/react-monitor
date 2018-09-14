import React, { Component } from 'react';
import BusinessBtn from 'component/common/business-btn'

const Business = [
  {
    leader:'龚建',
    exception:false,
    BusinessGroups:[
      {
        group:'国际代购',
        exception:false
      },
      {
        group:'国内出退改',
        exception:false
      },
      {
        group:'国际代购',
        exception:false
      },
      {
        group:'国际代购',
        exception:false
      },
      {
        group:'国际代购',
        exception:false
      }
    ]
  },
  {
    leader:'焦玉忠',
    exception:false,
    BusinessGroups:[
      {
        group:'国际代购',
        exception:false
      },
      {
        group:'国际代购',
        exception:false
      },
    ]
  },
  {
    leader:'李如意',
    exception:false,
    BusinessGroups:[
      {
        group:'火车票chat',
        exception:true
      },
      {
        group:'国际代购',
        exception:true
      },
    ]
  },
  {
    leader:'郭鹏',
    exception:false,
    BusinessGroups:[
      {
        group:'国际代购',
        exception:false
      },
      {
        group:'国际代购',
        exception:false
      },
    ]
  },
]

const letters = ['A','B','J','K']
export default class BusinessGroup extends Component{
  render(){
    return (
      <div className='business_group'>
      {
        Business.map((leader,index) =>{
          return <BusinessBtn {...leader} index={index}/>
        })
      }
      </div>
    );
  }
}
