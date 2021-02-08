import React from 'react';
import styled from 'styled-components';
import RedditLogo from '../resources/reddit_icon_svg.svg';

const StyledPageHeader = styled.div`
    background-color: #282c34;
    color: white;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 99999;
`;

const StyledRedditLogo = styled.img`
    width: 50px;
`;

const StyledH1WithLeftMargin = styled.h1`
    margin-left: 10px;
`;

const Navbar = () => {
    return (
        <StyledPageHeader>
            <StyledRedditLogo data-testid="navbar-logo" src={RedditLogo}></StyledRedditLogo>
            <StyledH1WithLeftMargin>Reddiget</StyledH1WithLeftMargin>            
        </StyledPageHeader>
    )
};

export default Navbar;