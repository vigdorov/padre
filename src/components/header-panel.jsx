import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { KeyboardArrowLeft } from '@material-ui/icons';

const HeaderPanel = props => {
  const { link } = props;
  return (
    <div className="header-panel">
      {link && (
        <Link className="header-panel__back-link" to={link}>
          <KeyboardArrowLeft />
        </Link>
      )}
      <span className="header-panel__title">{props.title}</span>
      <span className="header-panel__subtitle">{props.subtitle}</span>
    </div>
  );
};

export default HeaderPanel;

HeaderPanel.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  link: PropTypes.string,
};

HeaderPanel.defaultProps = {
  subtitle: '',
  link: '',
};
