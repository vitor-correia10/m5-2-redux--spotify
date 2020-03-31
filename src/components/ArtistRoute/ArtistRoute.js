import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { fetchArtistPageDetails } from '../../actions';
import { getArtist, getArtistStatus } from '../../reducers/artists.reducer';
import { getAccessToken } from '../../reducers/auth.reducer';

import FullScreenSpinner from '../FullScreenSpinner';

import Header from './Header';

const ArtistDetailsContainer = () => {
  const { artistId } = useParams();

  const dispatch = useDispatch();

  const accessToken = useSelector(getAccessToken);
  const artist = useSelector(getArtist);
  const artistStatus = useSelector(getArtistStatus);

  React.useEffect(() => {
    if (!accessToken) {
      return;
    }

    dispatch(fetchArtistPageDetails(artistId));
  }, [accessToken, artistId]);

  if (artistStatus === 'loading') {
    return <FullScreenSpinner />;
  }

  if (!artist) {
    // SOmething's gone wrong!
    return 'Error';
  }

  return (
    <>
      <Section>
        <Header
          photoSrc={artist.profile.images[1].url}
          name={artist.profile.name}
          followerCount={artist.profile.followers.total}
        />
      </Section>
    </>
  );
};

const Section = styled.section`
  margin-bottom: 64px;
`;

export default ArtistDetailsContainer;
