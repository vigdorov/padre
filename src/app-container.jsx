import React, { Suspense } from 'react';

import './assets/styles/index.scss';

const AppContainer = props => {
  return (
    <div className="app-container">
      <Suspense fallback={<div>Loading...</div>}>{props.children}</Suspense>
    </div>
  );
};

export default AppContainer;
