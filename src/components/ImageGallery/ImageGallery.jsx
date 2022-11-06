import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Dna } from 'react-loader-spinner';
import Button from 'components/Button/Button';
import axios from 'axios';
import { Component } from 'react';
import css from './ImageGallery.module.css';
import { url } from 'components/Constant/Url';
import { key } from 'components/Constant/Key';

class ImageGallery extends Component {
  state = {
    loading: false,
    error: null,
  };

  render() {
    const { loading, error } = this.state;
    const { imageName, image } = this.props;

    return (
      <ul className={css.gallery}>
        {error && <p>There is no such data:{imageName}</p>}
        {loading && (
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        )}
        {!imageName && <div>Enter some data</div>}
        {image.length > 0
          ? image.map(({ id, webformatURL, tags, largeImageURL }) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                tags={tags}
                largeImageURL={largeImageURL}
              />
            ))
          : null}
        {image.length > 0 && <Button loadMore={this.props.loadMore} />}
      </ul>
    );
  }
}

export default ImageGallery;
