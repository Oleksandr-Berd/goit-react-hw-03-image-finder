import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from '../Searchbar/Searchbar.module.css';

class Searchbar extends Component {
  state = {};

  handleSubmit = evt => {
    evt.preventDefault();
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <button type="submit" className={css.button}>
            <span className={css.button__label}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
