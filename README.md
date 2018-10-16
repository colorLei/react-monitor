# 量天尺数据监控平台

### 运行
```js
yarn
yarn start
```

#### 用到react相关的生态链模块:
  * `react`
  * `react-dom`
  * `react-router-dom`: react-router4以后 好像都是用这个东西了 
  * `redux`: 用来管理全局状态
  * `react-redux`: 用来管理全局状态
  * `redux-actions`: 用来创建action的，而且生成相关reducers的时候也不要写 switch/case 或 if/else 了，主要是方便。
  * `redux-saga`: `redux`的中间件， 用来处理我们异步action
  * `antd`: 随便找的一个比较常用的react-UI库

 跟react相关的主要就是这个几个了
 至于webpack 配置，基本跟以前配置vue的基本没多大区别。

 #### 文件目录讲解：
  * `webpack**`: 用来放置关于webpack的配置
  * `src`: 源码
  * `.babelrc`: babel配置
  * `postcsssrc.js`: css配置
  * `.eslintrc.json、.stylelintrc`: lint配置
  * `.vcmrc`: git提交commit规范
  
#### 别的目录就不说了，主要介绍一个`src`下的目录结构
  * `saga`: 集中处理异步请求
  * `reducers`: 放redux中reducer相关的地方
  * `assets`: 项目静态资源
  * `components`: 常用的公共组件
  * `router`: 路由相关的配置
  * `reducers`: redux的配置
  * `assets`: 公共样式以及图片文件
  * `common`: 公共方法
  * `containars`: 所有页面的主体结构
  * `constants`: 路径配置相关文件
  * `index.js`: 项目入口文件

### 1. React Router v4

    v4 的理念 router as component，理论上讲，整个工程的路由都要分散到各个 container 里，为了实现集中式路由配置，在 `router/index.js` 里做了一些转换：
    ```js
        {
            path: '/list',
            label: '消息列表'
        }

        // 转换为

        {
            path: '/list',
            label: '消息列表',
            component: List // List 为 src/containers/List.js
        }
    ```
    同时，在 render 的时候，会给 container 注入 `Routes`

### 2. Redux & Saga

    为了避免重复代码，内置了一些约定，从 `path.js` 开始

    ```javascript
        LIST_BUSINESS_UNITS: cms/message/listBusinessUnits

        // 转换为

        function LIST_BUSINESS_UNITS() {}

        LIST_BUSINESS_UNITS.toString() { return 'LIST_BUSINESS_UNITS' }

        LIST_BUSINESS_UNITS.OK = 'LIST_BUSINESS_UNITS_OK'
        LIST_BUSINESS_UNITS.NOK = 'LIST_BUSINESS_UNITS_NOK'

        LIST_BUSINESS_UNITS.API = 'cms/message/listBusinessUnits'
    ```
    从而实现变量一个当三个用，而且还附带请求路径信息

    在 Saga 模块，通过遍历生成默认 saga ，需特殊处理的可以使用 `sagaify` 自定义 saga

### 3. 按需加载
  按需加载的方法也不少，目前只尝试了第一种，因为我写Vue也是用import实现按需加载的，所以也就没去折腾了。

#### 1. **import方法 hoc高阶组件**

```
//asyncComponent.js
import React from 'react'
export default loadComponent => (
    class AsyncComponent extends React.Component {
        state = {
            Component: null,
        }
        async componentDidMount() {
            if (this.state.Component !== null) return

            try {
                const {default: Component} = await loadComponent()
                this.setState({ Component })
            }catch (err) {
                console.error('Cannot load component in <AsyncComponent />');
                throw err
            }
        }

        render() {
            const { Component } = this.state
            return (Component) ? <Component {...this.props} /> : null
        }
    }
)


// index.js
import asyncComponent from './asyncComponent.js'
const _import_ = file => asyncComponent(() => import(file))
_import_('components/Home/index.js')
```

原理很简单:
  * import()接受相应的模块然后返回Promise对象
  * asyncComponent 接收一个函数，且这个函数返回promise对象
  * 在componentDidMount钩子函数通过 async/await 执行接受进来的loadComponent方法，得到import返回的结果，赋值给state.Component,
  * 因为我们import的是一个React组件，所以我们得到的也是React组件，到时候只需要把该组件 render出去就行了

#### 2. [**Bundle组件 + import（跟第一种感觉差不多）**](https://www.jianshu.com/p/547aa7b92d8c)
#### 3. [**react-loadable**](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/code-splitting.md)
#### 4. [**bundle-loader**](https://segmentfault.com/a/1190000009539836)

### 4. request
我这里用到的是`axios`, 用`axios`做了个简单的拦截器

```
import axios from 'axios'
import qs from 'qs'


axios.defaults.withCredentials = true 

// 发送时
axios.interceptors.request.use(config => {
    // 发起请求,可以进行动画啥的
    return config
}, err => {
    return Promise.reject(err)
})

// 响应时
axios.interceptors.response.use(response => response, err => Promise.resolve(err.response))

// 检查状态码
function checkStatus(res) { 
    // 得到返回结果,结束动画啥的
    if (res.status === 200 || res.status === 304) {
        return res.data
    }
    return {
        code: 0,
        msg: res.data.msg || res.statusText,
        data: res.statusText
    }
    return res
}


// 检查CODE值
function checkCode(res) {
    if (res.code === 0) {
        throw new Error(res.msg)
    }
    
    return res
}

export default {
    get(url, params) {
        if (!url) return
        return axios({
            method: 'get',
            url: url,
            params,
            timeout: 30000
        }).then(checkStatus).then(checkCode)
    },
    post(url, data) {
        if (!url) return
        return axios({
            method: 'post',
            url: url,
            data: qs.stringify(data),
            timeout: 30000
        }).then(checkStatus).then(checkCode)
    }
}

```

### 5. redux
这里主要用了 [`redux-actions`](https://www.npmjs.com/package/redux-actions) 来创建action的 ， 
**原生写法**

```
// action
const addTodo = text => ({
    type: 'ADD_TODO',
    payload: {
      text,
      completed: false
    }
})

// reducer
const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
        ...
        default:
            return state
    }
}
```

用了 `redux-actions`的写法

```
import { createAction, handleActions } from 'redux-actions'

// action
const addTodo = createAction('ADD_TODO')

// reducer
const todos = handleActions({
    ADD_TODO: (state, action) => {
        return [...state, action.payload]
    }
    ...
}, [])
```
// 用`redux-actions`简单明了

### 6. connect
用了redux,这东西基本就不能少了, `connect`主要是用来 连接 `组件` 跟 `redux store`的, 就是让组件能获取redux store里面的 `值` 和 `方法`
`connect([mapStateToProps], [mapDispatchToProps], [mergeProps],[options])`

一般只用到前两个参数
  * `mapStateToProps(state, ownProps)`: 获取store里面state指定数据,然后传递到指定组件, ownProps 组件本身的 props
  * `mapDispatchToProps`: 这个是获取store里面的action方法, 然后传入指定组件 

**用法**

```
import toggleTodo from 'actions/todo'
const mapStateToProps = state => ({
    active: state.active
})
const mapDispatchToProps = {
    onTodoClick: toggleTodo
}
connect(mapStateToProps, mapDispatchToProps)(Component)
// 在Component组件中, 便能在 props 里面获取到 active 数据, 跟 onTodoClick 这个方法了
```

`connect`很多地方基本都要用到
所以也进行了封装

```
// connect.js
import actions from 'src/actions' // 所有action
import {connect} from 'react-redux' 
import {bindActionCreators} from 'redux'
export default connect(
    state => ({state}), // 偷懒了, 每次把state里面所有的数据都返回了
    dispatch => bindActionCreators(actions, dispatch) //合并所有action,并且传入dispatch, 那样我们在组件里面调用action,就不在需要dispatch了
)
```
[bindActionCreators](https://www.kancloud.cn/allanyu/redux-in-chinese/82434)

然后我们把 `connect.js` 文件通过 `webpack` 的alias属性来进行配置

```
//配置别名映射
alias: {
    'src': resolve('src'),
    'connect': resolve('src/utils/connect')
}
```
然后我们就可以在文件中如下引用

```
import React from 'react'
import connect from 'connect'

@connect // 通过装饰器调用
class Component extends React.Component {
  componentWillMount () {
    const {state, onTodoClick} = this.props
    console.log(state, onTodoClick)
  }
}
```
为了省事，我把`store`里面所有的数据 和 `action`都返回了。


### 7. cssModules
在 `vue` 中 我们一般都是通过设置 style标签的 `scoped` 属性来做到css模块化
但是在 `react` 中，我采用的 `cssModules` 来做css模块化

1. 通过`webpack`设置 `css-loader` 的`modules`来开启css的模块化 

```
{
    loader: 'css-loader',
    options: {
      modules: true, //是否开启
      localIdentName: '[name]__[local]___[hash:base64:5]'  // 转化出来的class名字结构
    }
},
```
2. 引入css, 并通过对象的赋值方式添加className

```
import styles from './styles.css'

export default () => (
  <div className={styles.a}></div>
)

//styles.css
.a {
    color: #ff4747;
}

```

或者可以通过 [`react-css-modules`](https://www.npmjs.com/package/react-css-modules) 来更方便的控制`class`类名
```
import styles from './styles.css'
import CSSModules from 'react-css-modules'

class Component extends React.Component {
  render () {
    return (
      <div styleName='a b'></div>
    )
  }
}
export default CSSModules(Component, styles, {
    allowMultiple: true //允许多个class一起使用
})


//styles.css
.a {
    color: #ff4747;
}
.b {
  background: #f00;
}
```
这样我们就可以通过字符串的方式传入 `class`类名. 注意: 我们添加时 不再使用 `className` 了, 而是使用 `styleName`了

### 8. 双向绑定的实现

```
class Bingding extends React.Component {
  state = {
    value: ''
  }
  handleInput = value => {
    this.setState({
      value
    })
  }
  render () {
    return (
      <input type="text" value={this.state.value} onChange={e => {this.handleInput(e.target.value)}}/>
      <div>{this.state.value}</div>
    )
  }
}
```
就是通过 `onChange` 事件 来触发 `this.setState` 重新渲染 render 方法

### 9. mixin

主要使用了ES6 `Decorator`装饰器
```
 detailMixins(id)

 export const detailMixins = (id) => (target) => {
   Object.assign(target.prototype,{
     componentDidMount() {
        \\some function
     }
   }
 }
```
