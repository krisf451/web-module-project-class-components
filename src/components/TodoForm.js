import React, { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [state, setState] = useState({
    input: ""
  });

  const handleChanges = e => {
    setState({
      input: e.target.value
    });
  };

  const handleAddClick = e => {
    e.preventDefault();
    addTodo(state.input);
    setState({ input: "" });
  };
  return (
    <form>
      <input
        onChange={handleChanges}
        value={state.input}
        type="text"
        name="todo"
        placeholder="Todo..."
      />
      <button onClick={handleAddClick}>Add Todo</button>
    </form>
  );
}

// import React from "react";

// class TodoForm extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       input: ""
//     };
//   }

//   //function to handle changes in the input field
//   handleChanges = e => {
//     //update state with each keystroke
//     this.setState({
//       input: e.target.value
//     });
//   };

//   handleClick = e => {
//     e.preventDefault();
//     this.props.addTodo(this.state.input);
//     this.setState({
//       input: ""
//     });
//   };

//   render() {
//     return (
//       <form>
//         <input
//           type="text"
//           name="todo"
//           onChange={this.handleChanges}
//           value={this.state.input}
//         />
//         <button onClick={this.handleClick}>Add 'To-Do'</button>
//       </form>
//     );
//   }
// }

// export default TodoForm;
