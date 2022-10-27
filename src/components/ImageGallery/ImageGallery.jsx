import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Dna } from 'react-loader-spinner';
import Button from 'components/Button/Button';

import { Component } from 'react';
import css from './ImageGallery.module.css';
import { url } from 'components/Constant/Url';
import { key } from 'components/Constant/Key';

class ImageGallery extends Component {
  state = {
    image: null,
    loading: false,
    error: null,
    page: 1,
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.imageName !== this.props.imageName ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true, image: null });

      setTimeout(() => {
        fetch(
          `${url}?q=${this.props.imageName}&page=${this.state.page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(res => res.json())
          .then(image => this.setState({ image }))
          .catch(error => this.setState({ error }))
          .finally(this.setState({ loading: false }));
      }, 1000);
    }
    console.log(prevState.page);
    console.log(this.state.page);
  }

  render() {
    const { loading, image, error } = this.state;
    const { imageName } = this.props;

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
        {image &&
          Object.values(image)[2].map(
            ({ id, webformatURL, tags, largeImageURL }) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                tags={tags}
                largeImageURL={largeImageURL}
              />
            )
          )}
        {image && <Button loadMore={this.loadMore} />}
      </ul>
    );
  }
}

export default ImageGallery;
