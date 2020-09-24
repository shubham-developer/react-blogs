import React from "react";

const Post = ({
  title,
  description,
  thumbnail,
  date,
  navigateToPostDetail,
}) => {
  const stringTruncate = (str, length) => {
    var dots = str.length > length ? "..." : "";
    return str.substring(0, length) + dots;
  };

  return (
    <div className="post" onClick={navigateToPostDetail}>
      <img src={thumbnail} alt="post" className="img-thumbnail mb-2" />
      <p className="mb-1">Posted on : {date}</p>
      <h2 className="mb-2">{title}</h2>
      <p>{stringTruncate(description, 200)}</p>
    </div>
  );
};

export default Post;
