import json from '../components/list'

const initialState = {
  data: json[0].data,
  extras: json[0].options
}

export default function rootReducer(state = initialState, action) {
  switch(action.type) {
    case 'SORT':
      return {
        data: json[action.payload].data,
        extras: json[action.payload].options
      }
      default: 
      return state
  }
}