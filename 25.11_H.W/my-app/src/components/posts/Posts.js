import { Component } from "react";
import PostCard from "./PostCard";
import * as styles from "./Posts.module.css";


export default class Posts extends Component {
  state = { posts: [] };

  getPosts = () => {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
          const temp = []
        for (let i = 90; i < data.length; i++) {
            temp.push(data[i])
        }
        this.setState({posts:temp})
      });
  };

  render() {
    return (
        <div>
          <button className={styles.btn} onClick={this.getPosts}>Get posts</button>
        {this.state.posts.map((post, i) => {
            return (
              <PostCard key={i} post={post} />
              );
            })}
      </div>
    );
  }
}
