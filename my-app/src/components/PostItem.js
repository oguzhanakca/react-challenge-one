import React from "react";
import css from "./css/PostItem.module.css";

function PostItem(props) {
  return props.posts.map((post) => {
    return (
      <div className={css.SearchItem} key={post.id}>
        <p>Art Type: {post.type}</p>
        <p>Artist: {post.user}</p>
        <img src={post.webformatURL} alt="random" />
        <p>Tags: {post.tags}</p>
      </div>
    );
  });
}

export default PostItem;
