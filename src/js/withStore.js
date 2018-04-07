import React, { Component } from 'react';

function withStore(Component, Store) {
  return class extends Component {
    constructor() {
      super()
      this.states = {
        data: Store.getState()
      }
      this._onChange = this._onChange.bind(this)
    }

    _onChange() {
      this.setState({
        data: Store.getState()
      })
    }

    componentDidMount() {
      this.tokens = Store.addListener(this._onChange)
    }

    componentWillUnmount() {
      this.tokens.remove()
    }

    render() {
      return <Component data={this.states.data}/>
    }
  }
}

export default withStore