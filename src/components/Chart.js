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
        <button onClick={() => this.props.onSort(0)}>By days</button>
        <button onClick={() => this.props.onSort(1)}>By months</button>
        <button onClick={() => this.props.onSort(2)}>By years</button>
      </div>
    );
  }
};


function mapDispatchToProps(dispatch) {
  return {
    onSort: (number) => dispatch({type: 'SORT', payload: number})
  }
}

export default connect(null, mapDispatchToProps)(Chart)