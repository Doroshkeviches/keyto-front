import React from 'react';
/**@ts-ignore*/
import ReactDOM from 'react-dom/client';
import App from 'app';

import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

