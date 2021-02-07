import React from 'react';
import styled from 'styled-components';
import { StyledCenteredDiv } from './common';


const StyledButton = styled.button`
    color: white;
    background-color: orangered;
    border: none;
    padding: 10px 15px;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin-left: 10px;
    font-weight: bold;
    cursor: pointer;
    transition-duration: 0.4s;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

    :hover {
        color: orangered;
        background-color: white;        
    }
`;

const StyledContainer = styled(StyledCenteredDiv)`
    position: sticky;
    top: 7.5%;
    z-index: 99999;
    background-color: #282c34;
    padding: 10px;
`;

const Pagination = () => {
    return (
        <StyledContainer>
            <StyledButton>&laquo; Previous</StyledButton>
            <StyledButton>Dismiss all &#10005;</StyledButton>
            <StyledButton>Next &raquo;</StyledButton>
        </StyledContainer>
    )
};

export default Pagination;