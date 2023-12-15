import React from 'react'

const lists = ['BWM', 'Audi', 'Mayback']

const fetchApi = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(lists)
    }, 1000)
  })
}
export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      },
      lists: []
    }
  }

  componentDidMount() {
    const timeElement = document.getElementById('time')
    console.log(timeElement);
    fetchApi().then(res => this.setState(prevState => ({
      ...prevState,
      lists: res
    })))
  }

  getTime = () => {
    // this.setState({
    //   time: new Date().toLocaleTimeString()
    // })
    const newState = {
      ...this.state, // lay second, time override. Chi time dc cap nhat, second ko dc cap nhat
      time: {
        created: new Date().toLocaleTimeString(),
      }
    };
    this.setState(newState)
  }
 
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Hello World</h1>
        <h2 id='time'>It is {this.state.time.created}</h2>
        <h3>Seconds: {this.state.seconds.created}</h3>
        <button onClick={this.getTime}>Get Time</button>
      </div>
    )
  }
}