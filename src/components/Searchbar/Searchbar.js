import { SearchForm } from 'components/SearchForm/SearchForm';
import PropTypes from 'prop-types';

import styled from './Searchbar.module.css';

export const Searchbar = ({ getQueryName }) => {
  return (
    <header className={styled.Searchbar}>
      <SearchForm getQueryName={getQueryName} />
    </header>
  );
};

Searchbar.propTypes = {
  getQueryName: PropTypes.func.isRequired,
};
