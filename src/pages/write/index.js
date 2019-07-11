import React from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'

class Write extends React.PureComponent {
  render () {
    if (this.props.loginStatus) {
      return (
        <div>写文章</div>
      )
    } else {
      return <Redirect to='/login'/>
    }
    
  }
}
const mapStateToProps = (state) => {
  return {
    loginStatus: state.getIn(['login', 'login'])
  }
}
export default connect(mapStateToProps, null)(Write)
