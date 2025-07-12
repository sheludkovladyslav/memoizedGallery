import React from "react";
import axios from "axios";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import "./App.css";

axios.defaults.baseURL = "https://pixabay.com/api/";
let key = "47940094-0c8011e76b1fc57fc5c880eaa";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      page: 1,
      isLoading: false,
      error: "",
      query: "",
    };
  }

  searchPictures = async () => {
    this.setState({
      isLoading: true,
    });
    try {
      const query = this.state.query;
      const page = this.state.page;

      const response = await axios.get(
        `?q=${query}&key=${key}&image_type=photo&orientation=horizontal&perPage=12&page=${page}`
      );

      const hits = response.data.hits;
      console.log(hits);

      this.setState({
        pictures: hits,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        error: error,
      });
    }
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page &&
      prevState.query === this.state.query
    ) {
      await this.loadMorePictures();
    }
  }

  loadMorePictures = async () => {
    try {
      const query = this.state.query;
      const page = this.state.page;

      const response = await axios.get(
        `?q=${query}&key=${key}&image_type=photo&orientation=horizontal&perPage=12&page=${page}`
      );

      const hits = response.data.hits;
      this.setState({
        pictures: [...this.state.pictures, ...hits],
      });
    } catch (error) {
      console.error(error);
    }
  };

  paginationLoader = () => {
    this.setState({
      page: this.state.page + 1,
    });
  };

  searchValue = async (input) => {
    await this.setState({
      query: input,
    });

    this.searchPictures();
  };

  render() {
    const { isLoading, error, pictures } = this.state;
    return (
      <>
        <Searchbar SearchValue={this.searchValue}></Searchbar>
        {isLoading && <p className="Loader">Loading...</p>}
        {error && <p className="error">error!, {error}</p>}
        <ImageGallery pictures={pictures}></ImageGallery>
        <div className="btnContainer">
          <Button paginationLoader={this.paginationLoader}></Button>
        </div>
      </>
    );
  }
}
