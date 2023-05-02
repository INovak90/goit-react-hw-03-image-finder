import { ImageGalleryItems } from 'components/ImageGalleryItems/ImageGalleryItems';
import { Component } from 'react';
import styled from './ImageGallery.module.css';
import { fetchPixabay } from 'Api';
import { toast } from 'react-toastify';
import { BallTriangle } from 'react-loader-spinner';
import { ErrorMessage } from './ErrorMessage';
import { ImageModal } from 'components/Modal/ImageModal';
import { LoadMore } from 'components/LoadMore/LoadMore';
import PropTypes from 'prop-types';

const ERROR_MSG = {
  notFound:
    'Sorry, there are no images matching your search query. Please try again.',
  breaking: 'Something went wrong, please reload the page.',
};

export class ImageGallery extends Component {
  state = {
    arrayImages: null,
    error: null,
    isLoading: false,
    page: 1,
    selectedImage: null,
  };

  setSelectedImage = image => {
    this.setState({ selectedImage: image });
  };
  onCloseModal = e => {
    this.setState({ selectedImage: null });
  };
  onLoadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.query_name;
    const nextName = this.props.query_name;
    try {
      if (prevName !== nextName) {
        this.setState({
          isLoading: true,
          error: null,
        });
        const fetchGalleryImages = await fetchPixabay(
          nextName,
          this.state.page
        );

        if (fetchGalleryImages.length === 0) {
          this.setState({ isLoading: false });
          return toast.error(ERROR_MSG.notFound);
        }
        this.setState({ arrayImages: fetchGalleryImages });
        this.setState({ isLoading: false });
      }
      if (this.state.page !== prevState.page) {
        this.setState({ isLoading: true });
        const loadMoreImages = await fetchPixabay(nextName, this.state.page);
        this.setState({
          arrayImages: [...this.state.arrayImages, ...loadMoreImages],
        });
        this.setState({ isLoading: false });
      }
    } catch (error) {
      this.setState({ error: ERROR_MSG.breaking });
      this.setState({ isLoading: false });
    }
  }
  render() {
    const { arrayImages, isLoading, error } = this.state;
    return (
      <main>
        {error && <ErrorMessage error={this.state.error} />}
        {isLoading && (
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={styled.Loader}
            wrapperStyle=""
            visible={true}
          />
        )}
        <ul className={styled.ImageGallery}>
          {arrayImages && !isLoading && (
            <ImageGalleryItems
              arrayImages={this.state.arrayImages}
              setSelectedImage={this.setSelectedImage}
            />
          )}
        </ul>
        {arrayImages && !isLoading && <LoadMore onLoadMore={this.onLoadMore} />}
        <ImageModal
          onCloseModal={this.onCloseModal}
          isOpen={this.state.selectedImage !== null}
          image={this.state.selectedImage}
        />
      </main>
    );
  }
}

ImageGallery.propTypes = {
  query_name: PropTypes.string.isRequired,
};
