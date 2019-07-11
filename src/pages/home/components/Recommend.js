import React from 'react'
import { connect } from 'react-redux'
import { RecommendWrapper, RecommendItem } from '../style'

class Recommend extends React.PureComponent {
  render () {
    return (
      <RecommendWrapper>
        {
          this.props.list.map((item) => {
            return (
              <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}/>
            )
          })
        }
      </RecommendWrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    list: state.get('home').get('recommendList')
  }
}
export default connect(mapStateToProps, null)(Recommend)