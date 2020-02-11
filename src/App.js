import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import routes from './routes';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from './pages/NotFound/NotFound';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Switch>
          <Route exact path={routes.HOME} component={HomePage} />
          <Route
            exact
            path={routes.MOVIES_DETAILS}
            component={MovieDetailsPage}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </>
    );
  }
}

export default App;
