import axios from 'axios'
import * as constants from './constants'

const changeDetail = (title, content) => {
  return {
    type: constants.CHANGE_DETAIL,
    title,
    content
  }
}

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get(`${process.env.PUBLIC_URL}/api/detail.json?id=` + id).then((res) => {
      dispatch(changeDetail(res.data.data.title, res.data.data.content))
    })
  }
}