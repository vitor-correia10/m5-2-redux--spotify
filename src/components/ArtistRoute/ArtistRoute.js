import React, { Component } from 'react';

import { useSelector } from 'react-redux';

import Auth from '../Reducers/Auth-reducer';

const ArtistRoute = () => {
  const accessToken = useSelector((state) => state.Auth.token);

  return accessToken
};


export default ArtistRoute;
