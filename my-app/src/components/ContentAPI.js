import axios from "axios";
import API_KEY from "./secret";
import css from "./css/Content.module.css";
import PostItem from "./PostItem";
import Loader from "./Loader";
import React, { useEffect, useState } from "react";

function ContentAPI() {
  const [isLoaded, setLoaded] = useState(false);
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const fetchImages = () => {
    axios.get(`https://pixabay.com/api/?key=${API_KEY}`).then((response) => {
      const fetchedPosts = response.data.hits;
      setLoaded(true);
      setAllPosts(fetchedPosts);
      setPosts(fetchedPosts);
    });
  };

  const handleChange = (e) => {
    const inputText = e.target.value;
    const filteredPosts = allPosts.filter((post) => {
      return post.user.toLocaleLowerCase().includes(inputText);
    });
    setPosts(filteredPosts);
  };

  useEffect(() => {
    fetchImages();
  }, []);

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
          <h4>posts found: {posts.length}</h4>
        </form>
      </div>

      <div className={css.SearchResults}>
        {isLoaded ? <PostItem posts={posts} /> : <Loader />}
      </div>
    </div>
  );
}

export default ContentAPI;
