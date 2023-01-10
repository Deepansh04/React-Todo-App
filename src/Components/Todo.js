import React, { Component } from 'react'
var shortid = require('shortid');
export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      currstate: ''
    }
  }
  handleonchange = (e) => {
    this.setState({
      currstate: e.target.value
    })
  }
  handlsesubmit = (e) => {

    this.setState({

      tasks: [...this.state.tasks, { task: this.state.currstate, id: shortid.generate() }],

      currstate: ''
    })

  }
  handledelete = (id) => {
    let newarr = this.state.tasks.filter((taskobj) => {
      return id !== taskobj.id;
    })
    this.setState({
      tasks: [...newarr]
    })

  }
  render() {
    //console.log(this.state.tasks);
    return (

      <div>
        <input type="text" value={this.state.currstate} onChange={this.handleonchange} />
        <button onClick={this.handlsesubmit}>Submit</button>
        <ul>
          {
            this.state.tasks.map((taskObj) => (
              <li key={taskObj.id}>
                <p>{taskObj.task}</p>
                <button onClick={() => this.handledelete(taskObj.id)}>Delete</button>
              </li>

            ))
          }
        </ul>
      </div>
    )
  }
}
