import axios from 'axios'
import * as constants from './constants'
import { fromJS } from 'immutable' 

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.data.data.topicList,
  articleList: result.data.data.articleList,
  recommendList: result.data.data.recommendList
})
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      dispatch(changeHomeData(res))
    }).catch((error) => {

    })
  }
}

const addHomeList = (result, page) => ({
  type: constants.ADD_HOME_LIST,
  list: fromJS(result.data.data),
  page
})
export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get(`/api/homeList.json?page=${page}`).then((res) => {
      dispatch(addHomeList(res, page + 1))
    }).catch((error) => {

    })
  }
}

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show
})