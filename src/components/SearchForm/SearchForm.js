import style from './SearchForm.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export class SearchForm extends Component {
  state = {
    query_name: '',
  };

  onChangeQueryName = e => {
    this.setState({ query_name: e.currentTarget.value.toLowerCase() });
  };
  onSubmitForm = e => {
    e.preventDefault();
    if (this.state.query_name.trim() === '') {
      toast.error('Warning your query is bad !!!');
      return;
    }
    this.props.getQueryName(this.state.query_name);
    this.setState({ query_name: '' });
  };
  render() {
    return (
      <form onSubmit={this.onSubmitForm} className={style.SearchForm}>
        <button type="submit" className={style['SearchForm-button']}>
          <AiOutlineSearch size="24" />
          <span className={style['SearchForm-button-label']}>Search</span>
        </button>

        <input
          onChange={this.onChangeQueryName}
          name="query_name"
          value={this.state.query_name}
          className={style['SearchForm-input']}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    );
  }
}
SearchForm.propTypes = {
  getQueryName: PropTypes.func.isRequired,
};