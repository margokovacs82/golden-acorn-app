import React, { Component } from 'react';
import { connect } from 'react-redux';
import Display from '../components/display';
import Button from '../components/button';

class GoldenWithRedux extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (event) => {
    if (event.keyCode === 38) {
      this.props.dispatch({ type: 'INCREMENT' });
    }
    if (event.keyCode === 40) {
      if (this.props.count >= 1) {
        this.props.dispatch({ type: 'DECREMENT' });
      }
    }
    if (event.keyCode === 32) {
      this.props.dispatch({ type: 'SHOW_IMG' });
    }
    if (event.keyCode === 8) {
      this.props.dispatch({ type: 'HIDE_IMG' });
    }
  }

  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    if (this.props.count >= 1) {
      this.props.dispatch({ type: 'DECREMENT' });
    }
  }

  showImg = () => {
    this.props.dispatch({ type: 'SHOW_IMG' });
  }

  hideImg = () => {
    this.props.dispatch({ type: 'HIDE_IMG' });
  }

  render() {
    return (
      <h1>
        <div>
          <Button onClick={this.decrement} label="Oh, no, minus one!" />
          <Display count={this.props.count} />
          <Button onClick={this.increment} label="Yess, plus one!" />
        </div>
        <div>
          <Button onClick={this.showImg} label="Show me the acorn!" />
          <Display img={this.props.img} />
          <Button onClick={this.hideImg} label="Hide the acorn!" />
        </div>
      </h1>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    count: state.acornReducer.count,
    img: state.imgReducer.img,
  };
}

export default connect(mapStateToProps)(GoldenWithRedux);
