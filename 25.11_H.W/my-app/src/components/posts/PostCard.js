import { Component } from 'react'
import * as styles from "./PostCard.module.css";

export default class PostCard extends Component {
    render() {
        return (
            <div className={styles.PostCard}>
                <p>{this.props.post.title}</p>
                <p>{this.props.post.body}</p>
                <br/><br/>
            </div>
        )
    }
}
