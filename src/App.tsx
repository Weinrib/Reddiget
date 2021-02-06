import React from 'react';
import './App.css';
import styled from 'styled-components';
import PostList from './PostList/PostList';
import Navbar from './Layout/Navbar';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #282c34;
  height: 100vh;
  width: 100%;
`;

const StyledPostsContainer = styled.div`
  flex-basis: 40%;
`;

const App = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <StyledContainer className="row">
        <StyledPostsContainer><PostList/></StyledPostsContainer>

      </StyledContainer>
    </React.Fragment>
  );
};

export default App;
