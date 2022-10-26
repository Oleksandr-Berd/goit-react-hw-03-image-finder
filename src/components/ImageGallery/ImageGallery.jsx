import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import css from './ImageGallery.module.css';
import { url } from 'components/Constant/Url';
import { key } from 'components/Constant/Key';

class ImageGallery extends Component {
  state = {
    image: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      fetch(
        `${url}?q=${this.props.imageName}&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(image => this.setState({ image }));
    }
  }

  render() {
    return (
      <ul className={css.gallery}>
        {this.state.image &&
          Object.values(this.state.image)[2].map(
            ({ id, webformatURL, tags }) => (
              <ImageGalleryItem
                id={id}
                webformatURL={webformatURL}
                tags={tags}
              />
            )
          )}
      </ul>
    );
  }
}

export default ImageGallery;
