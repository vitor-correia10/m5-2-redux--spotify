import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { TokenProvider } from './components/TokenContext';

ReactDOM.render(
  <TokenProvider>
    <App />
  </TokenProvider>,
  document.getElementById('root')
);
