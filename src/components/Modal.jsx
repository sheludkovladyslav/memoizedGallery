import * as basicLightbox from "basiclightbox";
import React from "react";
import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: false,
      id: null,
      picture: "",
    };
  }

  getId = (event) => {
    const id = event.target.dataset.id;
    this.setState(
      {
        id: id,
      },
      this.fetchData
    );
  };

  fetchData = async (event) => {
    if (!this.state.id) return;

    this.setState({ isLoading: true });
    try {
      const response = await axios.get(
        `q=cat&page=1&key=47940094-0c8011e76b1fc57fc5c880eaa&image_type=photo&orientation=horizontal&per_page=12&id="${this.state.id}"`
      );

      this.setState(
        {
          picture: response.data.hits[0],
          isLoading: false,
        },
        this.renderModal
      );
    } catch (error) {
      this.setState({
        error: error,
        isLoading: false,
      });
    }
  };
  renderModal = () => {
    const picture = this.state.picture;

    if (this.state.error) {
      const instance = basicLightbox.create(`
    <div class="modal">
        <p>Помилка: ${this.state.error.message}</p>
    </div>`);

      instance.show();
    } else {
      const instance = basicLightbox.create(`
    <div class="modal">
       <img src=${largeImageURL} alt="" />  
    </div>`);
      instance.show();
    }
  };

  render() {
    return;
  }
}
