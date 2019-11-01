import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import {connect} from 'react-redux'

class Chart extends Component{
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
      <div>
        <h2>Chart</h2>
        <Bar
          data={this.props.data}
          width={100}
          height={100}
          options={
            this.props.extras
          }
        />
        <button onClick={() => this.props.onDaySort(0)}>By one day</button>
        <button onClick={() => this.props.onMonthSort(0)}>By one month</button>
        <button onClick={() => this.props.onYearSort(0)}>By one year</button>
      </div>
    );
  }
};


function mapDispatchToProps(dispatch) {
  return {
    onDaySort: (number) => dispatch({type: 'DAY_SORT', payload: number}),
    onMonthSort: (number) => dispatch({type: 'MONTH_SORT', payload: number}),
    onYearSort: (number) => dispatch({type: 'YEAR_SORT', payload: number})
  }
}

export default connect(null, mapDispatchToProps)(Chart)