import React from 'react';
import { CheckCircle } from '@material-ui/icons';
import CircleIcon from './circle-icon';

const SuccessIcon = () => {
  return (
    <CircleIcon type="success">
      <CheckCircle />
    </CircleIcon>
  );
};

export default SuccessIcon;
