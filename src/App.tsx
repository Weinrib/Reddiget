import React from 'react';
import { animated, useTransition, UseTransitionResult } from 'react-spring';
import styled, { css } from 'styled-components';
import './App.css';
import { DEVICE_APPLIES_FOR_SPLIT_LAYOUT } from './common';
import Navbar from './Layout/Navbar';
import PaginationContainer from './Layout/Pagination/PaginationContainer';
import PostDetailContainer from './PostDetail/PostDetailContainer';
import PostListContainer from './PostList/PostListContainer';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #282c34;
  width: 100%;
  justify-content: space-around;
`;

const StyledPostsContainer = styled.div`
  flex-basis: 40%;
  visibility: visible;
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
    return item && <StyledDetailsContainer key={key} style={props}><PostDetailContainer /></StyledDetailsContainer>
  });
};

interface AppProperties {
  isPostSelected: boolean;
};

const MobileListHandler = styled.div`
  ${({ isPostSelected, deviceAppliesForSplitLayout }) => isPostSelected &&
    !deviceAppliesForSplitLayout && css`
    display: none;
  `}
`;

const App = ({ isPostSelected }: AppProperties) => {

  const transitions = useTransition(isPostSelected, 1, {
    config: { delay: 2000 },
    from: { opacity: 0, width: '0px', transform: "translate3d(20px, 0px, 0px)" },
    enter: { opacity: 1, width: 'auto', transform: "translate3d(0px, 0px, 0px)" },
  });

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <StyledContainer>
        <StyledPostsContainer deviceAppliesForSplitLayout={DEVICE_APPLIES_FOR_SPLIT_LAYOUT}>
          <MobileListHandler deviceAppliesForSplitLayout={DEVICE_APPLIES_FOR_SPLIT_LAYOUT} isPostSelected={isPostSelected}>
            <PaginationContainer />
            <PostListContainer />
          </MobileListHandler>
          {!DEVICE_APPLIES_FOR_SPLIT_LAYOUT && isPostSelected && buildDetailsContainer(transitions)}
        </StyledPostsContainer>
        {DEVICE_APPLIES_FOR_SPLIT_LAYOUT && isPostSelected && buildDetailsContainer(transitions)}
      </StyledContainer>
    </React.Fragment>
  );
};

export default App;
