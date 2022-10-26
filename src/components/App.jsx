import React, { Component } from 'react';
import css from '../components/App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
// import { ToastContainer } from 'react-toastify';

export default class App extends Component {
  state = {
    imageName: '',
  };

  componentDidMount() {}

  componentDidUpdate() {}

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <div className={css.app}>
        <Searchbar submit={this.handleFormSubmit} />
        <ImageGallery imageName={this.state.imageName} />
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
