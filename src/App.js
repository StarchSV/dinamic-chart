import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart'
import {connect} from 'react-redux'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Chart
        data={this.props.data} 
        extras={this.props.extras}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
    extras: state.extras
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch({type: 'ADD'}),
    onSub: () => dispatch({type: 'SUB'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);