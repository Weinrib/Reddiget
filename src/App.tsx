import React from 'react';
import './App.css';
import PageHeader from './Layout/PageHeader';
import styled from 'styled-components';


const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
`;


const App = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader></PageHeader>
        <div>
          <div>Posts</div>
          <div>Detail</div>
        </div>
      </div>


    </React.Fragment>
  );
};

export default App;
