import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={css.gallery__item}>
        <img className={css.galleryItem__image} src="" alt="" />
      </li>
    );
  }
}
