import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import quArticle from '../containers/quArticle';
import quFAQ from '../containers/quFAQ';
import quSearch from '../containers/quSearch';

const routers = () => {
 return (
  <Switch>
   <Route path="/quArticle" component={quArticle} />
   <Route path="/quFAQ" component={quFAQ} />
   <Route path="/quSearch" component={quSearch} />
   <Route path="*" render={() => (
    <Redirect to="/quSearch"/>
   )}/>
  </Switch>
 );
};

export default routers;
