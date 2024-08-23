import React, { Component } from "react";
import css from "./css/Content.module.css";
import posts from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

export class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
    };
  }

  loadPosts() {
    setTimeout(() => {
      this.setState({
        isLoaded: true,
      });
    }, 2000);
  }

  componentDidMount() {
    this.loadPosts();
  }

  render() {
    return (
      // <Loader />
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
        </div>

        <div className={css.SearchResults}>
          {this.state.isLoaded ? (
            <PostItem savedPosts={posts.savedPosts} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
}

export default Content;
