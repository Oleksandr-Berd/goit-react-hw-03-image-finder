import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = evt => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <li
        className={css.gallery__item}
        onClick={this.toggleModal}
        largeimageurl={this.props.largeImageURL}
      >
        <img
          className={css.galleryItem__image}
          src={this.props.webformatURL}
          alt={this.props.tags}
        />
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImageURL={this.props.largeImageURL}
            alt={this.props.tags}
          ></Modal>
        )}
      </li>
    );
  }
}
