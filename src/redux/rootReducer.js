import json from '../JsonLocal/list'
import day from '../JsonLocal/dayParams'
import month from '../JsonLocal/monthParams'
import year from '../JsonLocal/yearParams'


const initialState = {
  data: json[0].data,
  extras: json[0].options
}

export default function rootReducer(state = initialState, action) {
  switch(action.type) {
    case 'DAY_SORT':
      return {
        data: day[action.payload].data,
        extras: day[action.payload].options
      }
    case 'MONTH_SORT':
      return {
        data: month[action.payload].data,
        extras: month[action.payload].options
      }
    case 'YEAR_SORT':
      return {
        data: year[action.payload].data,
        extras: year[action.payload].options
      }
      default: 
      return state
  }
}