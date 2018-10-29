import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from 'container/App'
import store from './store'
import xhr from 'common/api'
import { HOME } from 'constant/action-types'

import 'style/index.scss'

const bootstrap = () => {
    return render(
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>,
        document.getElementById('app')
    )
}

async function checkLogin () {
  try{
    await xhr({
      url:HOME.CHECK_LOGIN.API
    })
    bootstrap()
  }catch(e){
    alert('您暂无权限查看此页面')
  }
}

checkLogin()

if (module.hot) {
  module.hot.accept();
}
