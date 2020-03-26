import React from 'react';
import { useParams } from 'react-router-dom';
import useApiEndpoint from '../../hooks/use-api-endpoint.hook';

const ArtistDetails = () => {
  const { artistId } = useParams();
  const [data, status] = useApiEndpoint(`/artists/${artistId}`);

  console.log(data, status);

  return <div />;
};

export default ArtistDetails;
