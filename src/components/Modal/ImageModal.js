import Modal from 'react-modal';
import PropTypes from 'prop-types';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 'calc(100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
    zIndex: '1300',
  },
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  },
};

Modal.setAppElement('#root');

export const ImageModal = ({ onCloseModal, isOpen, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div>
        <img src={image} alt="" />
      </div>
    </Modal>
  );
};

ImageModal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  image: PropTypes.oneOfType([PropTypes.object.isRequired, PropTypes.string.isRequired]),
};
