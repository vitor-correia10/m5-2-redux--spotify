import React, { Component } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchArtistProfile } from '../../helpers/Api-helpers';
import { receiveArtistData } from '../../Actions';
import { getArtist, getArtistStatus } from '../Reducers/Artists-reducer';

import styled from 'styled-components/macro';

import Header from './Header';


const ArtistRoute = () => {
  const accessToken = useSelector((state) => state.Auth.token);
  const { artistId } = useParams();
  const dispatch = useDispatch();

  const artist = useSelector(getArtist);
  const artistStatus = useSelector(getArtistStatus);

  React.useEffect(() => {
    if (!accessToken) {
      return;
    }

    fetchArtistProfile(accessToken, artistId).then(
      json => {
        dispatch(receiveArtistData(json));
      }
    );
  }, [accessToken, artistId]);
  console.log('Artist?', artist)

  if (artistStatus === 'loading') {
    return 'Loading';
  }

  if (!artist) {
    return 'Error';
  }

  return (
    <Wrapper>
      <Header
        photo={artist.images[1].url}
        name={artist.name}
        followers={artist.followers.total}
      />
      <Tag>Tags</Tag>
      {artist.genres.slice(0, 2).map(genre => (
        <Gender> {genre} </Gender>
      ))}
    </Wrapper>
  )
};

const Wrapper = styled.div`
  text-align: center;
`

const Tag = styled.h3`
  font-size: 21px;
  margin-top: 15px;
  margin-bottom: 5px;
`

const Gender = styled.span`
  display: inline-block;
  margin: 0 10px;
  padding: 5px 10px;
  background: rgba(75, 75, 75, 0.4);
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
`



export default ArtistRoute;
