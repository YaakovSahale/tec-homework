import { Component } from "react";
import "./tableData.css";

export default class TableData extends Component {
  state = {
    posts: [],
    title: "",
    body: "",
    postId: "",
  };

  componentDidMount() {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data }));
  }

  render() {
    const { posts } = this.state;
    let tempPosts = this.state.posts;

    const editBtn = (person) => {
      this.setState({
        title: "",
        body: "",
        id: "",
      });
    };

    const deleteBtn = (i) => {
      tempPosts.splice(i, 1);
      this.setState({ arrayPersons: tempPosts });
    };

    const btnUpdate = () => {
      let editPost = tempPosts.find((post) => post.id === this.state.postId);
      editPost.title = this.state.title;
      editPost.body = this.state.body;
      this.setState({ posts: tempPosts });
    };

    return (
      <div>
        <textarea type="text" value={this.state.title}/>
        <textarea type="text" value={this.state.body}/>
        <table>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
            <th></th>
            <th></th>
          </tr>

          {posts.map((post, i) => {
            return post.id > 5 ? null : (
              <tr>
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button
                    onClick={() => {
                      editBtn(i);
                    }}
                  >
                    edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deleteBtn(i);
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
