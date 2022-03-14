import React from "react";
import axios from "axios";
import "./App.css";
class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  handleOnChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((res) => {
        this.props.onSubmit(this.state);
      });
  };
  render() {
    let { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label>UserId</label>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.handleOnChange}
            ></input>
          </div>
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleOnChange}
            ></input>
          </div>
          <div>
            <label>Body</label>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.handleOnChange}
            ></input>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
