import React, { Component } from 'react';
import { connect } from 'react-redux';


class GoldenWithRedux extends Component {

  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    if (this.props.count >= 1) {
      this.props.dispatch({ type: 'DECREMENT' });
    }
  }

  displayAcorns = ({ count }) => {
    let acStr = '';
    for (let i = 0; i < this.props.count; i++ ) {
      acStr += '🌰';
    }
  }

  render() {
    return (
      <h1>
      <div>
        <button onClick={this.decrement}>Oh, no, minus one!</button>
        <span> {this.props.count} </span>
        {this.props.displayAcorns} 
        <button onClick={this.increment}>Yess, plus one!</button>
      </div>
      </h1>
    )
  }
}


function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(GoldenWithRedux);