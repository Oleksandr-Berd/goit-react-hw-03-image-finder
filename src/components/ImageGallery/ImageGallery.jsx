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
    image: [],
    loading: false,
    error: null,
    page: 1,
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.imageName !== this.props.imageName ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      const response = await axios.get(
        `${url}?q=${this.props.imageName}&page=${this.state.page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
      );
      console.log(response.data.hits);
      this.setState(prevState => ({
        image: [...prevState.image, ...response.data.hits],
        loading: false,
      }));
    }
    console.log(prevState.image);
    console.log(this.state.image);
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
        {image.length > 0 && <Button loadMore={this.loadMore} />}
      </ul>
    );
  }
}

export default ImageGallery;
