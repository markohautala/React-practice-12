import React, { Component } from 'react'
import LifeCyclesCDMChild from './LifeCyclesCDMChild'

export class LifeCyclesCDM extends Component {

    constructor(props) {
        console.log('Parent Constructor Called')
        super(props)

        this.state = {
          data: 'Parent component is Loading...',
        }
      }

      getParentData() {
        console.log('Parent getParentData() called')
        setTimeout(() => {
          console.log('Parent Data fetched!')
          this.setState({
            data: 'Parent Loaded!'
          })
        }, 3000)
      }

      componentDidMount() {
        console.log('Parent Component mounted')
        this.getParentData();
      }

    render() {
        console.log('Parent Render method called')
        return (
            <div>
                <hr />
                <br />
                <h1>{this.state.data}</h1>
                <LifeCyclesCDMChild />
            </div>
        )
    }
}

export default LifeCyclesCDM