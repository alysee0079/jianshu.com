import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})
const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})
export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
})
export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
})
export const changePageList = (page) => ({
  type: constants.CHANGE_PAGE_LIST,
  page
})
export const getList = () => {
  return (dispatch) => {
    axios.get(`${process.env.PUBLIC_URL}/api/headerList.json`).then((res) => {
      dispatch(changeList(res.data.data))
    }).catch((error) => {
      console.log(error)
    })
  }
}