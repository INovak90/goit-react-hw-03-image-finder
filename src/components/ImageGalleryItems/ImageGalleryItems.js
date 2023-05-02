import styled from './ImageGalleryItems.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItems = ({ arrayImages, setSelectedImage }) => {
  return arrayImages.map(({ id, largeImageURL, webformatURL }) => (
    <li
      key={id}
      className={styled.ImageGalleryItem}
      onClick={() => setSelectedImage(largeImageURL)}
    >
      <img
        className={styled['ImageGalleryItem-image']}
        src={webformatURL}
        alt=""
      />
    </li>
  ));
};

ImageGalleryItems.propTypes = {
  arrayImages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  setSelectedImage: PropTypes.func.isRequired,
};
