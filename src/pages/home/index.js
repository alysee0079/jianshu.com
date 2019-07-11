import React from 'react'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import { actionCreators } from './store/index'

class Home extends React.PureComponent {
  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4677/a6d5d4ae2540976a7bd62e9db466b0301414d319.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="sss"/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
        }
      </HomeWrapper>
    )
  }
  handleScrollTop () {
    window.scrollTo(0 ,0)
  }
  componentDidMount () {
    this.props.changeHomeData()
    this.bindEvents()
  }
  bindEvents () {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapStateToProps = (state) => {
  return {
    showScroll: state.getIn(['home', 'showScroll'])
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    changeHomeData () {
      dispatch(actionCreators.getHomeInfo())
    },
    changeScrollTopShow (e) {
      if (document.documentElement.scrollTop > 400) {
        dispatch(actionCreators.toggleTopShow(true))
      } else {
        dispatch(actionCreators.toggleTopShow(false))
      }
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Home)