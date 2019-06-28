import React from 'react';
import { Link } from 'react-router-dom';
import { AddShoppingCart } from '@material-ui/icons';
import { URL_ADD_SHOPS } from '../../route/url';

const AddShopButton = () => {
  return (
    <Link className="circle-add-button" to={URL_ADD_SHOPS}>
      <AddShoppingCart />
    </Link>
  );
};

export default AddShopButton;
