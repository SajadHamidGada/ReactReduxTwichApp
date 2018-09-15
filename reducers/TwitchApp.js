import React from 'react';
//define the initial state
const initialState = {
  status : '',
  streams : [],
  error : ''
}

  //define a reducer with an initalized state and logic to handle action
function TwitchApp(state= initialState,action){
  switch(action.type){
    case 'FETCH_REQUEST':
      const request = Object.assign({},state,{
        status: action.status,
      })
      return request
    case 'FETCH_SUCCESS':
    const success = Object.assign({},state,{
      status: action.status,
      streams:action.streams
    })
    return success
    case 'FETCH_FAILURE':
    const failure = Object.assign({},state,{
      status: action.status,
      error: action.error
    })
    return failure
    default:
      return state;
  }

}
export default TwitchApp;