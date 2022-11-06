import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Dna } from 'react-loader-spinner';
import Button from 'components/Button/Button';

import { Component } from 'react';
import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  render() {
    const { imageName, image, loading, error } = this.props;

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
