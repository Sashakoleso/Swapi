import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    search: '',
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { value } = this.state;
    onSubmit(value);
    this.setState({ search: '' });
  };

  render() {
    const { search } = this.state;
    return (
      <form
        style={{
          marginTop: '50px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        onChange={this.handleChange}
      >
        <input
          style={{ width: '300px', height: '30px', marginBottom: '10px' }}
          value={search}
          onChange={this.handleChange}
          type="text"
        />
        <button
          style={{
            backgroundColor: 'red',
            width: '70px',
            height: '30px',
            fontSize: '18px',
          }}
          type="submit"
        >
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
