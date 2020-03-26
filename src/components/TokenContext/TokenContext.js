import React from 'react';

export const TokenContext = React.createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = React.useState(null);

  React.useEffect(() => {
    fetch('/spotify_access_token')
      .then(res => console.log(res) || res.json())
      .then(json => {
        setToken(json.access_token);
      });
  }, []);

  return (
    <TokenContext.Provider value={token}>{children}</TokenContext.Provider>
  );
};
