import React, { Component } from 'react';
import css from '../components/App.module.css';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';

export default class App extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {}

  componentDidUpdate() {}

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <div className={css.app}>
        <Searchbar />
        <button
          type="buttom"
          onClick={this.toggleModal}
          className={css.open__modal}
        >
          open modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi repudiandae fugit officiis distinctio facilis molestias
              ipsam beatae explicabo eligendi ipsa dignissimos nisi hic nemo,
              atque saepe incidunt corrupti dolorem dolorum!
            </p>
            <img src="" alt="" />
            <button type="button" onClick={this.toggleModal}>
              close
            </button>
          </Modal>
        )}
      </div>
    );
  }
}
