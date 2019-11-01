import { DAY_SORT, MONTH_SORT, YEAR_SORT } from "./actionTypes";


export function daySort(number) {
  return {
    type: DAY_SORT,
    payload: number
  }
}

export function monthSort(number) {
  return {
    type: MONTH_SORT,
    payload: number
  }
}

export function yearSort(number) {
  return {
    type: YEAR_SORT,
    payload: number
  }
}

export function asyncYear(number) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(yearSort(number))
    }, 3000)
  }
}