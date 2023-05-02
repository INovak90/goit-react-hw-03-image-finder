import { Searchbar } from './Searchbar/Searchbar';
import styled from './App.module.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    query_name: '',
  };

  getQueryName = name => {
    this.setState({ query_name: name });
  };

  render() {
    return (
      <div className={styled.App}>
        <Searchbar getQueryName={this.getQueryName} />
        <ImageGallery query_name={this.state.query_name} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
