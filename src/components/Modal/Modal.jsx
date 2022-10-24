import css from './Modal.module.css';
import { createPortal } from 'react-dom';
import React, { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', evt => {
      if (evt.code === 'Escape') {
        console.log(evt);
        this.props.onClose();
      }
    });
  }

  componentWillUnmount() {}

  render() {
    return createPortal(
      <div className={css.overlay}>
        <div className={css.modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
