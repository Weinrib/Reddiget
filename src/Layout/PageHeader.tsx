import React from 'react';
import styled from 'styled-components';
import RedditLogo from '../resources/reddit_icon_svg.svg';

const StyledPageHeader = styled.div`
    text-align: center;
    background-color: #282c34;
    color: white;
    max-height: 100px;
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center
`;

const StyledRedditLogo = styled.img`
    width: 50px;
`;

const StyledH1WithLeftMargin = styled.h1`
    margin-left: 10px;
`;

const PageHeader = () => {
    return (
        <StyledPageHeader>
            <StyledRedditLogo src={RedditLogo}></StyledRedditLogo>
            <StyledH1WithLeftMargin>Reddiget</StyledH1WithLeftMargin>            
        </StyledPageHeader>
    )
};

export default PageHeader;