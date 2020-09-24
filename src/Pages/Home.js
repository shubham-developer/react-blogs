import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";

import Post from "../Components/Post";

const Home = () => {
  const [posts, setPostsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("./posts.json")
      .then((response) => {
        setPostsData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const history = useHistory();

  const navigateToPostDetail = (postData) => {
    history.push("/post-detail", {
      postData,
    });
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <BarLoader size={400} color={"#123abc"} loading={loading} />
      </div>
    );
  }
  return (
    <div>
      {posts &&
        posts.length > 0 &&
        posts.map((postData, key) => (
          <Post
            key={key}
            title={postData.title}
            thumbnail={postData.thumbnail}
            description={postData.description}
            date={postData.date}
            navigateToPostDetail={() => navigateToPostDetail(postData)}
          />
        ))}
    </div>
  );
};

export default Home;
