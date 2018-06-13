import React, { Component } from 'react';
import Button from './components/button';
import Display from './components/display';

export default class GoldenAcornAppWithState extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    };
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
      this.setState({ count: this.state.count + 1 })

    }
    if (event.keyCode === 40) {
      if (this.state.count >= 1) {
        this.setState({ count: this.state.count - 1 })
      }
    }
  }

  addAcorns = () => {
    this.setState({ count: this.state.count + 1 });
  }

  minusAcorns = () => {
    if (this.state.count >= 1) {
      this.setState({ count: this.state.count - 1 })
    }
  }

  render() {
    return (
      <h1>
        <div>
          <Button label="Eat one" onClick={this.minusAcorns} />
          <Display count={this.state.count} />
          <Button label="Buy one" onClick={this.addAcorns} />
        </div>
      </h1>
    )
  }
}
