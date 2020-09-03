import React from 'react';
import styled from 'styled-components';

const Header = ({ name, photo, followers }) => {
    return (
        <Wrapper>
            <Image src={photo} />
            <Name>
                {name}
            </Name>
            <Followers>
                <FollowNum>{(followers / 1000000).toFixed(1)}M</FollowNum> followers
            </Followers>
        </Wrapper>
    );
};


const Wrapper = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

const Image = styled.img`
    border-radius: 50%;
    width: 175px;
    filter: opacity(0.5);
`;

const Name = styled.h1`
    font-size: 36px;
    margin-top: -40px;
    text-align: center;
  `;

const Followers = styled.p`
    margin-top: -16px;
    font-size: 14px;
  `;

const FollowNum = styled.span`
    font-weight: bold;
    color: #FF4FD8;
  `;


export default Header;