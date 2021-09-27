import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

//set up mock data for initial todos
const todos = [
  {
    name: "Learn React/Redux",
    id: 1,
    finished: false
  },
  {
    name: "Take out the trash",
    id: Date.now(),
    finished: false
  },
  {
    name: "Deadlift 300",
    id: 2,
    finished: false
  },
  {
    name: "Build a House",
    id: 3,
    finished: false
  },
  {
    name: "Master the Flute",
    id: 4,
    finished: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos
    };
  }
  //toggle completed function
  toggleFinished = id => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, finished: !todo.finished };
        } else {
          return todo;
        }
      })
    });
  };

  //add todo
  addTodo = name => {
    const newTodo = {
      name: name,
      id: Date.now(),
      finished: false
    };
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    });
  };

  //clear completed todos
  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return todo.finished === false;
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          handleClear={this.handleClear}
          toggleFinished={this.toggleFinished}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
