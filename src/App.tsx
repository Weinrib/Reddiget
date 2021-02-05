import React from 'react';
import './App.css';
import PageHeader from './Layout/PageHeader';
import styled from 'styled-components';
import PostList from './PostList/PostList';

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
      <PageHeader></PageHeader>
      <StyledContainer>
        <StyledPostsContainer><PostList/></StyledPostsContainer>
       
      </StyledContainer>
    </React.Fragment>
  );
};

export default App;
