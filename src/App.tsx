import React from 'react';
import './App.css';
import styled, { css } from 'styled-components';
import PostList from './PostList/PostList';
import Navbar from './Layout/Navbar';
import { animated, useTransition, UseTransitionResult } from 'react-spring';
import PostDetail from './PostDetail/PostDetail';
import Pagination from './Layout/Pagination';
import { Provider } from 'react-redux';
import { store } from './Store/store';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #282c34;
  width: 100%;
  justify-content: space-around;
`;

const StyledPostsContainer = styled.div`
  flex-basis: 40%;
  ${({ deviceAppliesForSplitLayout }) => !deviceAppliesForSplitLayout && css`
    flex-basis: 90%;
  `}
`;

const StyledDetailsContainer = styled(animated.div)`
  display: flex;
  margin-top: 20px;
  align-items: flex-start;
  flex-basis: 50%;
`;


const buildDetailsContainer = (transitions: Array<UseTransitionResult<boolean, Pick<React.CSSProperties, any>>>) => {
  return transitions.map(({ item, key, props }) => {
    return item && <StyledDetailsContainer style={props}><PostDetail /></StyledDetailsContainer>
  });
};

const App = () => {

  const deviceAppliesForSplitLayout = window.innerWidth >= 1100;

  const [toggle, setToggle] = React.useState(true);

  const transitions = useTransition(toggle, null, {
    config: { delay: 2000 },
    from: { opacity: 0, width: '0px', transform: "translate3d(20px, 0px, 0px)" },
    enter: { opacity: 1, width: 'auto', transform: "translate3d(0px, 0px, 0px)" },
  });

  return (
    <Provider store={store}>
      <React.Fragment>
        <Navbar></Navbar>
        <StyledContainer>
          <StyledPostsContainer deviceAppliesForSplitLayout={deviceAppliesForSplitLayout}>
            <Pagination></Pagination>
            <PostList />
          </StyledPostsContainer>
          {deviceAppliesForSplitLayout && buildDetailsContainer(transitions)}
        </StyledContainer>
      </React.Fragment>
    </Provider>
  );
};

export default App;
