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
