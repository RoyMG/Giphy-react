import React from "react";

export const GifGirdItem = ({ id, title, url }) => {
  //   console.log(img);
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  );
};
