import React from 'react';
import { Link } from 'react-router-dom';
import { AddAlarm } from '@material-ui/icons';
import { URL_ADD_TASKS } from '../../route/url';

const AddTaskButton = () => {
  return (
    <Link className="circle-add-button" to={URL_ADD_TASKS}>
      <AddAlarm />
    </Link>
  );
};

export default AddTaskButton;
