import React, {Component, Suspense} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Auth from './lib/server';
import './assets/styles/index.scss';
import * as appActions from "./store/actions-creators";


class AppContainer extends Component {
  static propTypes = {
    getStateFromServer: PropTypes.func.isRequired,
  };

  componentDidMount () {
    const response = Auth.getContent();
    response.then(res => {
      this.props.getStateFromServer(res);
    });
  }

  render () {
    return (
      <div className="app-container">
        <Suspense fallback={<div>Loading...</div>}>{this.props.children}</Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getStateFromServer: payload => dispatch(appActions.getStateFromServer(payload)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(AppContainer);

