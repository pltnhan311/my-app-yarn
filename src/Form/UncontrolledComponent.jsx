import React, { Component, createRef } from 'react'

export class UncontrolledComponent extends Component {
  constructor(props) {
    super(props);
    this.input = createRef();
    this.fileInput = createRef();
    this.state = {
      selectedFile: null,
      name: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.input.current.value);

    const formData = new FormData();
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    console.log(this.state.selectedFile);

    // axios.post('api/uploadFile', formData)
  };

  onFileChange = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  onChangeInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              ref={this.input}
              value={this.state.name}
              onChange={this.onChangeInput}
            />
          </label>
          <input type="file" name="avatar" onChange={this.onFileChange} />
          <input type="submit" value="submit" ref={this.fileInput} />
        </form>
      </div>
    );
  }
}

export default UncontrolledComponent