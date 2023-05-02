import styled from './ImageGallery.module.css';
export const ErrorMessage = ({ error }) => {
  return (
    <div className={styled.BoxError}>
      <p className={styled.Error}>{error}</p>
    </div>
  );
};
