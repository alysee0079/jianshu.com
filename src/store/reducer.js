import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store/index'
import { reducer as homerReducer } from '../pages/home/store/index'
import { reducer as detailReducer } from '../pages/detail/store/index'
import { reducer as loginReducer } from '../pages/login/store/index'

export default combineReducers({
  header: headerReducer,
  home: homerReducer,
  detail: detailReducer,
  login: loginReducer
})

