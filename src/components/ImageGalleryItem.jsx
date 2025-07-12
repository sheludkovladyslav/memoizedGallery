import React from "react";
import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";

export default class ImageGalleryItem extends React.Component {
  openModal = (url) => {
    console.log("click");
    const instance = basicLightbox.create(`
      <div class="modal">
        <img src="${url}" alt="Large view" />
      </div>
    `);
    instance.show();
  };

  render() {
    const galleryItems = this.props.pictures;

    return (
      <>
        {galleryItems.map((picture) => {
          return (
            <li key={picture.id} data-id={picture.id} className="picture">
              <img
                src={picture.previewURL}
                className="img"
                alt=""
                onClick={() => this.openModal(picture.largeImageURL)}
              />
            </li>
          );
        })}
      </>
    );
  }
}
