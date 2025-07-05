import React from "react";

export default class ImageGalleryItem extends React.Component {
  render() {
    const galleryItems = this.props.pictures;
    const modalShow = this.props.modalShow;

    return (
      <>
        {galleryItems.map((picture) => {
          return (
            <li key={picture.id} onClick={modalShow} data-id={picture.id}>
              <img
                src={picture.webformatURL}
                alt=""
                width={picture.webformatWidth}
                height={picture.webformatHeight}
              />
            </li>
          );
        })}
      </>
    );
  }
}
