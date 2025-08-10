import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";

export default function ImageGallery({ pictures }) {
  return (
    <ul className="pictures">
      <ImageGalleryItem galleryItems={pictures} />
    </ul>
  );
}
