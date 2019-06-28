import React from 'react';
import { Error } from '@material-ui/icons';
import CircleIcon from './circle-icon';

const WarningIcon = () => {
  return (
    <CircleIcon type="warning">
      <Error />
    </CircleIcon>
  );
};

export default WarningIcon;
