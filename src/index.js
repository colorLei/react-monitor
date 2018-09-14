import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from 'container/App'
import store from './store'

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

bootstrap()

if (module.hot) {
  module.hot.accept();
}
