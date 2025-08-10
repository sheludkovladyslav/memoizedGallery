import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";
import React from "react";

export default function ImageGalleryItem({ galleryItems }) {
  const openModal = (url) => {
    console.log("click");
    const instance = basicLightbox.create(`
      <div class="modal">
        <img src="${url}" alt="Large view" />
      </div>
    `);
    instance.show();
  };

  return (
    <>
      {galleryItems.map((picture) => {
        return (
          <li key={picture.id} data-id={picture.id} className="picture">
            <img
              src={picture.previewURL}
              className="img"
              alt=""
              onClick={() => openModal(picture.largeImageURL)}
            />
          </li>
        );
      })}
    </>
  );
}
