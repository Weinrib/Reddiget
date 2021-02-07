import React from 'react';
import Moment from 'react-moment';
import styled from 'styled-components';
import { FLEX_CENTER_STYLE, StyledAuthorHeader, StyledAuthorSpan, StyledCenteredDiv, StyledComments } from '../Layout/common';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    border: 2px solid orangered;
    border-radius: 15px;
    color: white;
    flex-grow: 1;
    position: sticky;
    top: 20%;

    @media only screen and (max-height: 950px) {
        top: 25%;
    }

    @media only screen and (max-height: 800px) {
        top: 28%;
    }

    @media only screen and (max-height: 768px) {
        top: 25%;
    }

    @media only screen and (max-height: 700px) {
        top: 34%;
    }

    @media only screen and (max-height: 500px) {
        align-items: center;
    }
`;

const StyledImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-self:center;

    @media only screen and (max-width: 700px) {
        max-width: 250px;
        max-height: 300px;
    }

    @media only screen and (max-width: 600px) {
        max-height: 250px;
    }

    @media only screen and (max-width: 500px) {
        max-height: 225px;
    }

    @media only screen and (max-width: 400px) {
        max-height: 200px;
    }
`;

const StyledTitleContainer = styled(StyledCenteredDiv)`
    text-align: center;
`;

const FLEX_WITH_MARGIN_STYLE = {
    ...FLEX_CENTER_STYLE,
    marginTop: '10px',
    marginBottom: '10px'
}

const PostDetail = () => {
    return (
        <StyledContainer>
            <StyledTitleContainer>
                <h3>My son always texts to, and wanted to share.</h3>
            </StyledTitleContainer>
            <StyledImageContainer>
                <img src="https://i.redd.it/ll5vz9bigwf61.gif" />
            </StyledImageContainer>
            <StyledAuthorHeader style={FLEX_WITH_MARGIN_STYLE}>
                <span>{`Sent by `}<StyledAuthorSpan>Jose</StyledAuthorSpan>&nbsp;<Moment fromNow>{1231313111}</Moment></span>
            </StyledAuthorHeader>
            <StyledComments style={FLEX_WITH_MARGIN_STYLE}>
                <span>12350 comments</span>
            </StyledComments>
        </StyledContainer>
    );
}

export default PostDetail;