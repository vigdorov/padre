import React from 'react';
import PropTypes from 'prop-types';

const CardShop = props => {
  return (
    <div className="card-shop">
      <span className="card-shop__number">{props.number}</span>
      <span className="card-shop__address">{props.address}</span>
    </div>
  );
};

export default CardShop;

CardShop.propTypes = {
  number: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
};
