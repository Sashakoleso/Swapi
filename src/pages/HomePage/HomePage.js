/* eslint-disable no-console */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import * as API from '../../services/api';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Home.module.css';

const mapper = films => {
  return films.map(({ episode_id: id, ...props }) => ({
    id,
    ...props,
  }));
};

export default class HomePage extends Component {
  state = {
    films: [],
    isLoading: false,
  };

  componentDidMount() {
    this.allFilms();
  }

  allFilms = search => {
    this.setState({ isLoading: true });

    API.allFilms(search)
      .then(({ data }) => this.setState({ films: mapper(data.results) }))
      .catch(console.log)
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { films, isLoading } = this.state;
    return (
      <div
        style={{
          background: 'https://wallpapercave.com/wp/wp2902991.jpg',
        }}
      >
        {isLoading && <Loader />}
        <SearchBar onSubmit={this.allFilms} />
        <ul className={styles.mainList}>
          {films.map(({ title, id }) => (
            <li key={id} className={styles.mainTitleStyle}>
              <Link to={`/films/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
