import { LocaleProvider } from 'antd';
import CN from 'antd/lib/locale-provider/zh_CN';
import React from 'react';
// import Routers from '../router'
import LeftMenu from 'container/home/left-menu';

const App = () => {
 return (
  <LocaleProvider locale={CN}>
    <LeftMenu/>
    {/* <Routers/> */}
  </LocaleProvider>
 );
};

export default App;
