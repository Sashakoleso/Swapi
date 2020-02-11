/* eslint-disable no-shadow */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Proppes from 'prop-types';
import * as API from '../../services/api';

export default class MovieDetailsPage extends Component {
  static propTypes = {
    match: Proppes.shape({
      params: Proppes.shape({}.isRequired),
    }).isRequired,
  };

  state = {
    filmData: {},
    planetsName: [],
  };

  componentDidMount() {
    const { match } = this.props;

    API.getFilmByID(match.params.id)
      .then(({ data }) => {
        const { planets: urlPlanets } = data;
        urlPlanets.forEach(url => {
          API.planetsForFilm(url)
            .then(({ data }) => {
              this.setState(ps => ({
                planetsName: [...ps.planetsName, data.name],
              }));
            })
            .catch(console.error);
        });

        this.setState({ filmData: data });
      })
      .catch(console.error);
  }

  render() {
    const {
      title,
      opening_crawl: crawl,
      director,
      producer,
      release_date: release,
    } = this.state.filmData;

    const planets = this.state.planetsName;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor: 'lightGrey',
          width: '900px',
          marginTop: '50px',
          border: '2px solid black',
        }}
      >
        {planets && (
          <>
            <h1
              style={{
                color: 'blue',
                paddingTop: '20px',
              }}
            >
              {title}
            </h1>
            <h3
              style={{
                color: 'red',
                paddingTop: '20px',
              }}
            >
              {crawl}
            </h3>
            <p
              style={{
                paddingTop: '20px',
              }}
            >
              Director: {director}
            </p>
            <p
              style={{
                paddingTop: '20px',
              }}
            >
              Producer: {producer}
            </p>
            <p
              style={{
                padding: '20px 0 20px 0',
              }}
            >
              Release date: {release}
            </p>
            {planets.map(el => (
              <span key={el}>Planet: {el}</span>
            ))}
          </>
        )}
      </div>
    );
  }
}
