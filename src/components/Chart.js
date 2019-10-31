import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import json from '../components/list'



class Chart extends Component{
  constructor() {
    super()
    this.state = {
      data: json[0].data,
      extras: json[0].options
    }
  }
  
  changeOutputDefault = (value) => {
    console.log(json[0].options)
    this.setState({
      data: json[value].data,
      extras: json[value].options
    })
  }

  render() {
    return (
      <div>
        <h2>Chart</h2>
        <Bar
          data={this.state.data}
          width={100}
          height={50}
          options={
            this.state.extras
          }
        />
        <button onClick={() => {this.changeOutputDefault(0)}}>By days</button>
        <button onClick={() => {this.changeOutputDefault(1)}}>By months</button>
        <button onClick={() => {this.changeOutputDefault(2)}}>By years</button>
      </div>
    );
  }
};

export default Chart