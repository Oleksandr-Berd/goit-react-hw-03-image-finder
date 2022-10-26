import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      console.log(prevProps.imageName);
      console.log(this.props.imageName);
      console.log('SMTh happens');
    }
  }

  render() {
    return (
      <ul className={css.gallery}>
        {this.props.imageName && <ImageGalleryItem />}
      </ul>
    );
  }
}

export default ImageGallery;
