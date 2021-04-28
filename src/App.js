import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation.js';
import Footer from './components/Footer';
import React, { Component } from 'react';
import tasks from './task.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge'
import FormTask from './components/FormTask';

class App extends Component {

  constructor(){
    super();
    this.state = {
      tasks
    }

    this.addNewTask = this.addNewTask.bind(this)
  }

  addNewTask(newTask){
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }

  removeTask(index){
    this.setState({
      tasks: this.state.tasks.filter((e, i) => {
        return i !== index
      })
    });
  }

  render() {
    const task = this.state.tasks.map( (tas, i) => {
      return (
        <div className="col-md-3 mr-5" key={ i }>
          <div className="card mt-1" style={{ width: '15rem' }}>
            <div className="card-header">
              <h5 className="card-title">{ tas.title }</h5>
              <Badge variant="danger">
                { tas.priority }
              </Badge>
            </div>
            <div className="card-body">
              <p className="card-text">{ tas.description }</p>
              <p className="card-text"><mark>{ tas.responsible }</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={ this.removeTask.bind(this, i) }>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )
    })


    return (
      <div className="App">
          <Navigation count={ this.state.tasks.length }/> 
          <img src={logo} className="App-logo" alt="logo" />
          <div className="mb-5 container">
            <div className="row">
              <FormTask addTask={ this.addNewTask }/>
              <div className="row w-75">
                { task }
              </div>
            </div>
          </div>
          <Footer />
      </div>
    );
  }
}

export default App;
