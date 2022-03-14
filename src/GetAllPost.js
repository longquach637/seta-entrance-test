import React from "react";
import axios from "axios";
import PostForm from "./PostForm";
class GetAllPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ListPost: [],
    };
  }
  async componentDidMount() {
    let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    this.setState({
      ListPost: res && res.data ? res.data : [],
    });
  }

  handleOnAdd = () => {
    console.log("add");
  };

  onSubmit = (data) => {
    let { ListPost } = this.state;
    data.id = Math.floor(Math.random() * 100000);
    ListPost.push(data);
    this.setState({
      ListPost: ListPost,
    });
    alert("Them thanh cong");
  };
  render() {
    let { ListPost } = this.state;
    return (
      <>
        <div className="container">
          <PostForm onSubmit={this.onSubmit} />
          <h2 className="title">Fetch all list post</h2>
          {/* <button className="btn btn-primary" onClick={this.handleOnAdd}>
            Them
          </button> */}
          <table className="table table-bordered table-hover mt-15">
            <thead>
              <tr>
                <th className="text-center">UserId</th>
                <th className="text-center">Id</th>
                <th className="text-center">Title</th>
                <th className="text-center">Body</th>
              </tr>
            </thead>
            <tbody>
              {ListPost &&
                ListPost.length > 0 &&
                ListPost.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td className="text-center pd-15">{item.userId}</td>
                      <td className="text-center pd-15">{item.id}</td>
                      <td className="text-center pd-15">{item.title}</td>
                      <td className="text-center pd-15">{item.body}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default GetAllPost;
