import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import  { actionCreators } from './store/index'
import  { actionCreators as loginActionCreators } from '../../pages/login/store/index'
import { Link } from 'react-router-dom'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
}  from './style'

class Header extends React.Component {
  render () {
    return (
      <React.Fragment>
        <HeaderWrapper>
          <Link to="/">
            <Logo />
          </Link>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载APP</NavItem>
            {
              this.props.login ? <NavItem className="right" onClick={this.props.logout}>退出</NavItem> : <Link to="/login"><NavItem className="right">登陆</NavItem></Link>
              }
            <NavItem className="right">
              <span className="iconfont">&#xe636;</span>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                timeout={200}
                in={this.props.focused}
                classNames="slide"
              >
                <NavSearch
                  className={this.props.focused ? 'focused' : ''}
                  onFocus={() => this.props.handleInputFocus(this.props.list)}
                  onBlur={this.props.handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <span className={this.props.focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60d;</span>
              {this.getListArea()}
            </SearchWrapper>
          </Nav>
          <Addition>
            <Link to='/write'>
              <Button className="writting">
                <span className="iconfont">&#xe61c;</span>
                写文章
              </Button>
            </Link>
            <Button className="reg">注册</Button>
          </Addition>
        </HeaderWrapper>
      </React.Fragment>
    )
  }
  getListArea () {
    const list = []
    const jsList = this.props.list.toJS()
    if (jsList.length) {
      for (let i = (this.props.page - 1) * 10;i<this.props.page * 10;i++) {
        list.push(
          <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
        )
      }
    }
    if (this.props.focused || this.props.mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={this.props.handleMouseEnter}
          onMouseLeave={this.props.handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => this.props.handleChangePage(this.props.page, this.props.totalPage, this.spinIcon)}>
              <span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>
              换一换
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {list}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    list: state.get('header').get('list'),
    page: state.get('header').get('page'),
    mouseIn: state.get('header').get('mouseIn'),
    totalPage: state.get('header').get('totalPage'),
    login: state.get('login').get('login')
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus (list) {
      if (list.size === 0) {
        dispatch(actionCreators.getList())
      }
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur () {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter () {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave () {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage (page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = 'rotate('+ originAngle + 360 +'deg)'
      if (page < totalPage) {
        dispatch(actionCreators.changePageList(page + 1))
      } else {
        dispatch(actionCreators.changePageList(1))
      }
      
    },
    logout () {
      dispatch(loginActionCreators.logout())
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Header)