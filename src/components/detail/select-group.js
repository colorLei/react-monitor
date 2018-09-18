import React, { Component } from 'react';


export default  (props) => {
  const { bgClass,text } = props;
  return (
    <div className='select_group'>
      <label>数据维度：</label>
        <ul>
          <li>历史趋势</li>
          <li className='active'>小时创建</li>
        </ul>
    </div>
  );
}

