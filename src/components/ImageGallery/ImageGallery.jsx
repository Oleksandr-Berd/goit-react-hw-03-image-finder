import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import css from './ImageGallery.module.css';
import { url } from 'components/Constant/Url';
import { key } from 'components/Constant/Key';

class ImageGallery extends Component {
  state = {
    image: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      this.setState({ loading: true });

      fetch(
        `${url}?q=${this.props.imageName}&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(image => this.setState({ image }))
        .finally(this.setState({ loading: false }));
    }
  }

  render() {
    return (
      <ul className={css.gallery}>
        {this.state.loading && <div>Loading...</div>}
        {!this.props.imageName && <div>Enter some data</div>}
        {this.state.image &&
          Object.values(this.state.image)[2].map(
            ({ id, webformatURL, tags, largeImageURL }) => (
              <ImageGalleryItem
                id={id}
                webformatURL={webformatURL}
                tags={tags}
                largeImageURL={largeImageURL}
              />
            )
          )}
      </ul>
    );
  }
}

export default ImageGallery;
