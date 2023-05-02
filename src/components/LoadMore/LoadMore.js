import styled from './LoadMore.module.css';
import PropTypes from 'prop-types';

export const LoadMore = ({ onLoadMore }) => {
  return (
    <div className={styled.BoxLoadMore}>
      <button onClick={onLoadMore} className={styled.Button} type="button">
        Load more
      </button>
    </div>
  );
};

LoadMore.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
