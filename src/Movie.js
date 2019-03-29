import React, { Component } from 'react';
import './movie.css';
import PropTypes from 'prop-types';

class movie extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string
  }


  render() {
    return (
      <div>
        <MoviePoster poster={this.props.poster} />
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

class MoviePoster extends Component {

  static propTypes = {
    poster: PropTypes.string.isRequired
  }

  render() {
    console.log(this.props)
    return (
      <img src= {this.props.poster} />
    )
  }
}


export default movie