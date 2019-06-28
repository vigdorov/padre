import React from 'react';
import { NewReleases } from '@material-ui/icons';
import CircleIcon from './circle-icon';

const DangerIcon = () => {
  return (
    <CircleIcon type="danger">
      <NewReleases />
    </CircleIcon>
  );
};

export default DangerIcon;
