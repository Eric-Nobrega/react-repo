import React from "react";

const ImageList = (props) => {
  //Iterate through the App state of the array of objects
  const images = props.images.map((ele) => {
    //Give each image tag a unique ID and Link
    return <img key={ele.id} src={ele.urls.small} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
