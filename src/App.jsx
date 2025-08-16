import React, { useEffect, useRef } from "react";
import axios from "axios";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import "./App.css";
import { useState, useMemo } from "react";

axios.defaults.baseURL = "https://pixabay.com/api/";
let key = "47940094-0c8011e76b1fc57fc5c880eaa";

export default function App() {
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  const prevPage = useRef(page);
  const prevQuery = useRef(query);

  const searchPictures = useMemo(async () => {
    setIsLoading(true);
    try {
      setPictures([]);

      const response = await axios.get(
        `?q=${query}&key=${key}&image_type=photo&orientation=horizontal&perPage=12&page=${page}`
      );

      const hits = response.data.hits;

      setPictures(hits);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  }, [query]);

  const loadMorePictures = async () => {
    try {
      const response = await axios.get(
        `?q=${query}&key=${key}&image_type=photo&orientation=horizontal&perPage=12&page=${page}`
      );

      const hits = response.data.hits;
      const picturesNow = pictures;
      setPictures([...picturesNow, ...hits]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (prevPage !== page && prevQuery !== query) {
      loadMorePictures();
    }
  }, [page, query]);

  const paginationLoader = () => {
    const pageNow = page;
    setPage(pageNow + 1);
  };

  const searchValue = async (input) => {
    setQuery(input);
    searchPictures();
  };

  const picturesMemo = useMemo(() => {
    return pictures;
  }, [pictures]);

  return (
    <>
      <Searchbar SearchValue={searchValue}></Searchbar>
      {isLoading && <p className="Loader">Loading...</p>}
      {error && <p className="error">error!, {error}</p>}
      <ImageGallery pictures={picturesMemo}></ImageGallery>
      <div className="btnContainer">
        <Button paginationLoader={paginationLoader}></Button>
      </div>
    </>
  );
}
