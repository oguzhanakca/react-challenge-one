import React, { useEffect, useState } from "react";
import css from "./css/Content.module.css";
import data from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

function ContentHooks() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [fetchedPosts, setFetchedPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
      setFetchedPosts(data.savedPosts);
    }, 2000);
  });

  const handleChange = (e) => {
    const inputText = e.target.value;
    const filteredPosts = data.savedPosts.filter((post) => {
      return post.title.toLocaleLowerCase().includes(inputText);
    });
    setFetchedPosts(filteredPosts);
  };

  return (
    <div className={css.Content}>
      <div className={css.TitleBar}>
        <h1>My Photos</h1>
        <form>
          <label htmlFor="searchInput">Search: </label>
          <input
            type="search"
            id="searchInput"
            onChange={(e) => handleChange(e)}
            placeholder="filter"
          />
          <h4>posts found: {fetchedPosts.length}</h4>
        </form>
      </div>

      <div className={css.SearchResults}>
        {isLoaded ? <PostItem posts={fetchedPosts} /> : <Loader />}
      </div>
    </div>
  );
}

export default ContentHooks;
