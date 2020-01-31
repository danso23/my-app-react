/**
 * @author DANIEL EDUARDO SOLIS CAN
 * 
 */
import React, { Component } from 'react';
import './App.css';

// import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm';
import { todos } from './todos.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  removeTodo(index) {    
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        
        return i !== index;
      })
    });
  }

  render(){
    const todos = this.state.todos.map((todo,i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">{todo.priority}</span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p>{todo.responsible}</p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}
              >
                Elminar
              </button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="https://www.google.com.mx" className="text-white">
              Tareas
              <span className="badge badge-pill badge-light ml-2">{this.state.todos.length}</span>
          </a>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <TodoForm onAddTodo={this.handleAddTodo} />
            </div>
          </div>
          <div className="row">            
            { todos }
          </div>          
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </div>
    ); 
  }
}

export default App;
