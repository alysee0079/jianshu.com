import React from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { actionCreators } from './store/index'

class Detail extends React.PureComponent {
  render () {
    if (!this.props.loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' ref={(input) => {this.account = input}}/>
            <Input placeholder='密码' type='password' ref={(input) => {this.password = input}}/>
            <Button onClick={() => this.props.login(this.account, this.password)}>登陆</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/'/>
    }
    
  }
}
const mapStateToProps = (state) => {
  return {
    loginStatus: state.getIn(['login', 'login'])
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    login (input, password) {
      dispatch(actionCreators.login(input.value, password.value))
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Detail)
