import React, { Component } from "react";
import css from "./css/Content.module.css";
import data from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

export class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      posts: [],
    };
  }

  loadPosts() {
    setTimeout(() => {
      this.setState({
        isLoaded: true,
        posts: data.savedPosts,
      });
    }, 2000);
  }

  componentDidMount() {
    this.loadPosts();
  }

  handleChange = (event) => {
    const inputText = event.target.value;
    const filteredPosts = data.savedPosts.filter((post) => {
      return post.title.toLocaleLowerCase().includes(inputText);
    });
    this.setState({
      posts: filteredPosts,
    });
  };

  render() {
    return (
      // <Loader />
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
          <form>
            <label htmlFor="searchInput">Search: </label>
            <input
              type="search"
              id="searchInput"
              onChange={(event) => this.handleChange(event)}
              placeholder="filter"
            />
            <h4>posts found: {this.state.posts.length}</h4>
          </form>
        </div>

        <div className={css.SearchResults}>
          {this.state.isLoaded ? (
            <PostItem posts={this.state.posts} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
}

export default Content;
