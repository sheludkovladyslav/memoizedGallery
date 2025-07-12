import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";

export default class ImageGallery extends React.Component {
  render() {
    const pictures = this.props.pictures;

    return (
      <ul className="pictures">
        <ImageGalleryItem pictures={pictures} />
      </ul>
    );
  }
}
