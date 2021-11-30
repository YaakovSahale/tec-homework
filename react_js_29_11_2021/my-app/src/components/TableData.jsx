import { Component } from "react";
import "./tableData.css";

export default class TableData extends Component {
  state = {
    posts: [],
    title: "",
    body: "",
    postId: null,
  };

  componentDidMount() {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data }));
  }

  componentDidUpdate() {

  }

  render() {
    const { posts } = this.state;
    const tempPosts = this.state.posts;

    const editBtn = (post) => {
      this.setState({
        title: post.title,
        body: post.body,
        id: post.id,
      });
    };

    const deleteBtn = (i) => {
      tempPosts.splice(i, 1);
      this.setState({ arrayPersons: tempPosts });
    };

    const btnUpdate = () => {
      const editPost = tempPosts.find((post) => post.id === this.state.id);
      editPost.title = this.state.title;
      editPost.body = this.state.body;
      this.setState({ posts: tempPosts });
    };

    const onChangeInputTitle = (e)=>{
      this.setState({title: e.target.value})
    }
    const onChangeInputBody = (e)=>{
      this.setState({body: e.target.value})
    }

    return (
      <div>
        <input onChange={onChangeInputTitle} type="text" value={this.state.title} />
        <input onChange={onChangeInputBody} type="text" value={this.state.body} />
        <button onClick={btnUpdate}>Update</button>
        <table>
          <thead>
            <tr>
              <th>userId</th>
              <th>id</th>
              <th>title</th>
              <th>body</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          {posts.map((post, i) => {
            return post.id > 5 ? null : (
              <tbody key={post.id}>
                <tr>
                  <td>{post.userId}</td>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td>
                    <button
                      onClick={() => {
                        editBtn(post);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        deleteBtn(i);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}
