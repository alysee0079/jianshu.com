import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { Globalstyle } from './style'
import { GlobaliconFontStyle } from './statics/iconfont/iconfont'
import store from './store/index'
import Header from './common/header'
import Home from './pages/home/index'
// import Detail from './pages/detail/index'
import Detail from './pages/detail/loadable'
import Login from './pages/login/index'
import Write from './pages/write/index'
function App() {
  return (
    <Provider store={store}>
      <Globalstyle />
      <GlobaliconFontStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL === '' ? '' : '/react/build'}>
        <Header />
        <div>{process.env.PUBLIC_URL}</div>
        <Route path='/' exact component={Home}></Route>
        <Route path='/login' exact component={Login}></Route>
        <Route path='/write' exact component={Write}></Route>
        <Route path='/detail/:id' exact component={Detail}></Route>
        {/* <Route path='/detail' exact component={Detail}></Route> */}
      </BrowserRouter>
    </Provider>
  )
}

export default App
