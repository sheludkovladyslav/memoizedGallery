import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";

export default class ImageGallery extends React.Component {
  render() {
    const pictures = this.props.pictures;
    const modalShow = this.props.modalShow;

    return (
      <ul>
        <ImageGalleryItem pictures={pictures} modalShow={modalShow} />
      </ul>
    );
  }
}
