import React from 'react';
import { Error } from '@material-ui/icons';
import CircleIcon from './circle-icon';

const AttentionIcon = () => {
  return (
    <CircleIcon type="attention">
      <Error />
    </CircleIcon>
  );
};

export default AttentionIcon;
