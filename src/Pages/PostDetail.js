import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PostDetail = () => {
  const { state, pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <div className="post">
        <img
          src={state.postData.thumbnail}
          alt="post"
          className="img-fluid mb-2"
        />
        <p className="mb-1">Posted on : {state.postData.date}</p>
        <h2 className="mb-2">{state.postData.title}</h2>
        <p>{state.postData.description}</p>
      </div>
    </div>
  );
};

export default PostDetail;
