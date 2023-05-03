import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background:
    linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)),
    url("https://images.wallpaperscraft.com/image/single/cat_muzzle_profile_black_background_118788_1600x900.jpg") center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  overflow: hidden;
`;

const Wrapper = styled.div`
  padding: 40px;
  width: 25%;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.p`
  margin: 0 0 10px 0;
`;

const Profile = ({ loggedIn, setLoggedIn }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const logout = async () => {
      try {
        const response = await fetch('http://localhost:3000/user/signout', {
          method: 'GET',
          credentials: 'include',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': true,
          },
        });
        if (response.ok) {
          setLoggedIn(false);
        }
      } catch (error) {
        console.error(`error in signout: ${error}`);
      } finally {
        setLoading(false);
      }
    };
    logout();
  }, [setLoggedIn]);

  if (loading) {
    return (
      <Container>
        <Wrapper>
          <LoadingContainer>
            <Title>Logging out...</Title>
            <LoadingText>Please wait</LoadingText>
            <div className="loading-spinner"></div>
          </LoadingContainer>
        </Wrapper>
      </Container>
    );
  }

  return <Redirect to="/login" />;
};

export default Profile;
