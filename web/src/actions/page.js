import {UPDATE_PAGE} from './types'

export const updatePage = (page) => {
  return (dispatch) => {

    console.log("Receive redux actions", page)
    dispatch({
      type: UPDATE_PAGE,
      payload: page
    })

  }
}