// import React, { useState } from "react";

// export default function TodoForm({ addTodo }) {
//   const [text, setText] = useState("");

//   const handleChanges = e => {
//     setText(e.target.value);
//   };

//   const handleAdd = () => {
//     addTodo(text);
//     setText("");
//   };
//   return (
//     <form>
//       <input
//         onChange={handleChanges}
//         value={text}
//         type="text"
//         name="todo"
//         placeholder="Enter A Todo..."
//       />
//       <button onClick={handleAdd}>Add Todo</button>
//     </form>
//   );
// }
import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  //function to handle changes in the input field
  handleChanges = e => {
    //update state with each keystroke
    this.setState({
      input: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    this.props.addTodo(this.state.input);
    this.setState({
      input: ""
    });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="todo"
          onChange={this.handleChanges}
          value={this.state.input}
        />
        <button onClick={this.handleClick}>Add 'To-Do'</button>
      </form>
    );
  }
}

export default TodoForm;
