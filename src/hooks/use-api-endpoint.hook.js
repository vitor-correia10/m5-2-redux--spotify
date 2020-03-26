import React from 'react';

import { TokenContext } from '../components/TokenContext';

const SPOTIFY_ROOT = 'https://api.spotify.com/v1';

export default function useApiEndpoint(endpoint) {
  const [status, setStatus] = React.useState('loading');
  const [data, setData] = React.useState('loading');

  const accessToken = React.useContext(TokenContext);

  const options = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  React.useEffect(() => {
    if (!accessToken) {
      return;
    }

    fetch(SPOTIFY_ROOT + endpoint, options)
      .then(res => res.json())
      .then(data => {
        setStatus('idle');
        setData(data);
      })
      .catch(err => setStatus('error'));
  }, [endpoint, accessToken]);

  return [data, status];
}
