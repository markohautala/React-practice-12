import React, { Component } from 'react'
import LifeCyclesCDUChild from './LifeCyclesCDUChild'

export class LifeCyclesCDU extends Component {
    constructor(props) {
        console.log('Constructor called');

        super(props)
        this.state = {
            greeting: 'Hello!'
        }
    }

    updateGreeting = () => {
      console.log('updateGreeting called');
      this.setState((prevState) => {
          return {
              greeting: prevState.greeting === 'Hello!' ? 'Goodbye!' : 'Hello!',
          }
      })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component is updated! (should be last item)');
    }

    render() {
        console.log('Render method called - html rendered');
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <button onClick={this.updateGreeting}>Update Greeting</button>
                <LifeCyclesCDUChild />

            </div>
        )
    }
}

export default LifeCyclesCDU