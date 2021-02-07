import React from 'react';
import './App.css';
import styled from 'styled-components';
import PostList from './PostList/PostList';
import Navbar from './Layout/Navbar';
import { useSpring, animated, useTransition } from 'react-spring';
import PostDetail from './PostDetail/PostDetail';
import Sticky from 'react-stickynode';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #282c34;
  width: 100%;
  justify-content: space-around;
`;

const StyledPostsContainer = styled.div`
  flex-basis: 40%;
`;

const StyledDetailsContainer = styled(animated.div)`
  display: flex;
  flex-basis: 45%;
  margin-top: 20px;
  align-items: flex-start;
`;

const App = () => {

  const deviceWithAppliesForSplitLayout = window.innerWidth >= 1000;

  const [toggle, setToggle] = React.useState(false);

  const transitions = useTransition(toggle, null, {
    config: { delay: 2000 },
    from: { opacity: 0, width: '0px', transform: "translate3d(20px, 0px, 0px)" },
    enter: { opacity: 1, width: 'auto', transform: "translate3d(0px, 0px, 0px)" },
  });

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <button onClick={() => setToggle(true)}>lalalala</button>
      <StyledContainer className="row">
        <StyledPostsContainer><PostList /></StyledPostsContainer>
        {
          transitions.map(({ item, key, props }) => {
            return item && <StyledDetailsContainer style={props}><PostDetail /></StyledDetailsContainer>
          })
        }
      </StyledContainer>
    </React.Fragment>
  );
};

export default App;
