import css from './Modal.module.css';
import { createPortal } from 'react-dom';
import React, { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = evt => {
    if (evt.target !== evt.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={css.overlay} onClick={this.handleBackdropClick}>
        <div className={css.modal}>
          <img
            className={css.image__modal}
            src={this.props.largeImageURL}
            alt={this.props.alt}
          />
          <p>{this.props.alt}</p>
          <button
            className={css.btn__close}
            type="button"
            onClick={this.toggleModal}
          >
            close
          </button>
        </div>
      </div>,
      modalRoot
    );
  }
}
