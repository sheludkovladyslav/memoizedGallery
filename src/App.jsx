import React from "react";
import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      page: 1,
      isLoading: false,
    };
  }
}

// ?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12"
