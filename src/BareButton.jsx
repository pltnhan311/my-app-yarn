import React from "react";

class BareButton extends React.Component {

  handleClick = (event, value) => {
    console.log(event);
    console.log(value);
  }

  render() {
    return (
      <div>
        <button onClick={(event) => this.handleClick(event, "add")}>Add</button>
        <button onClick={(event) => this.handleClick(event, "edit")}>Edit</button>
        <button onClick={(event) => this.handleClick(event, "delete")}>Delete</button>
      </div>
    );
  }
}

export default BareButton