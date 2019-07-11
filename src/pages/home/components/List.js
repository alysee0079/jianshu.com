import React from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store/index'
import { Link } from 'react-router-dom'

class List extends React.PureComponent {
  render () {
    return (
      <React.Fragment>
        {
          this.props.list.map((item, index) => {
            return (
              <Link key={index} to={'/detail/' + item.get('id')}>
              {/* <Link key={index} to={'/detail?id=' + item.get('id')}> */}
                <ListItem>
                  <img className="pic" src={item.get('imgUrl')} alt="aa" />
                  <ListInfo>
                    <h3 className="title">{item.get('title')}</h3>
                    <p className="desc">{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => this.props.getMoreList(this.props.page)}>加载更多...</LoadMore>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.get('home').get('articleList'),
    page: state.get('home').get('articlePage')
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    getMoreList (page) {
      dispatch(actionCreators.getMoreList(page))
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(List)