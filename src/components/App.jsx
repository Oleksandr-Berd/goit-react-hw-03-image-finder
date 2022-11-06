import React, { Component } from 'react';
import css from '../components/App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { url } from 'components/Constant/Url';
import { key } from 'components/Constant/Key';
import axios from 'axios';
// import { ToastContainer } from 'react-toastify';

export default class App extends Component {
  state = {
    imageName: '',
    page: 1,
    image: [],
  };

  handleFormSubmit = imageName => {
    this.setState({ imageName, page: 1, image: [] });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      // prevProps.imageName !== this.props.imageName ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      const response = await axios.get(
        `${url}?q=${this.state.imageName}&page=${this.state.page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
      );

      this.setState(prevState => ({
        image: [...prevState.image, ...response.data.hits],
        loading: false,
      }));
    }
    if (prevState.imageName !== this.state.imageName) {
      this.setState({ loading: true });
      const response = await axios.get(
        `${url}?q=${this.state.imageName}&page=${this.state.page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
      );

      this.setState({
        image: [...response.data.hits],
        loading: false,
      });
    }
    console.log(this.state.page);
  }

  render() {
    return (
      <div className={css.app}>
        <Searchbar submit={this.handleFormSubmit} />
        <ImageGallery
          imageName={this.state.imageName}
          loadMore={this.loadMore}
          page={this.state.page}
          image={this.state.image}
        />
        {/* <ToastContainer
          autoClose={3000}
          position="top-center"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        /> */}
      </div>
    );
  }
}
