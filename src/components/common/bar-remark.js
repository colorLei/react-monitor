import React from 'react';

export default ({one,two,three}) => {
  return (
    <ul className='bar_remark'>
      <li>
       <label></label>
        <span>{one}</span>
            </li>
            <li>
        <label></label>
        <span>{two}</span>
            </li>
            <li>
        <label></label>
        <span>{three}</span>
     </li>
   </ul>
  )
}
