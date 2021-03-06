import React from 'react';
import Moment from 'react-moment';
import styled from 'styled-components';
import { CHECK_IF_GIFV, DEVICE_APPLIES_FOR_SPLIT_LAYOUT, REPLACE_GIFV_WITH_MP4 } from '../common';
import { FLEX_CENTER_STYLE, StyledAuthorHeader, StyledAuthorSpan, Button, StyledCenteredDiv, StyledComments } from '../Layout/common';
import { Post } from '../types';

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
    max-width: 400px;
    max-height: 500px;

    @media screen and (max-width: 1200px) {
        max-width: 300px;
        max-height: 320px;
    }

    @media screen and (max-width: 1000px) {
        max-width: 200px;
        max-height: 300px;
    }

    @media screen and (max-width: 700px) {
        max-width: 250px;
        max-height: 300px;
    }

    @media screen and (max-width: 600px) {
        max-height: 250px;
    }

    @media screen and (max-width: 500px) {
        max-height: 225px;
    }

    @media screen and (max-width: 400px) {
        max-height: 200px;
        max-width: 200px;
    }
`;

const StyledGoBackButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px;
`;

const StyledButton = styled(Button)`
    padding: 10px 30px;
`;

const StyledTitleContainer = styled(StyledCenteredDiv)`
    text-align: center;
`;

const FLEX_WITH_MARGIN_STYLE = {
    ...FLEX_CENTER_STYLE,
    marginTop: '10px',
    marginBottom: '10px'
};

interface PostDetailProperties {
    post: Post;
    dismissPost: () => any;
};

const PostDetail = ({ post, dismissPost }: PostDetailProperties) => {

    const { url, author, is_self, is_video, title, media, created_utc, num_comments, selftext } = post;

    const imageIsGifv = CHECK_IF_GIFV(url);

    return (
        <StyledContainer>
            <StyledTitleContainer>
                <h3>{title}</h3>
            </StyledTitleContainer>
            {   !is_self
                && <StyledImageContainer>
                    {!is_video && !imageIsGifv && <img src={url} width="100%"/>}
                    {is_video && <video autoPlay={true} src={media?.reddit_video.fallback_url} width="100%" />}
                    {imageIsGifv &&
                        <video preload="auto" autoPlay loop width="100%">
                            <source src={REPLACE_GIFV_WITH_MP4(url)} type="video/mp4"></source>
                        </video>
                    }
                </StyledImageContainer>
            }
            {is_self && <div>{selftext}</div>}
            <StyledAuthorHeader style={FLEX_WITH_MARGIN_STYLE}>
                <span>{`Sent by `}<StyledAuthorSpan>{author}</StyledAuthorSpan>&nbsp;<Moment unix fromNow>{created_utc}</Moment></span>
            </StyledAuthorHeader>
            <StyledComments style={FLEX_WITH_MARGIN_STYLE}>
                <span>{`${num_comments} comments`}</span>
            </StyledComments>
            {
                !DEVICE_APPLIES_FOR_SPLIT_LAYOUT && 
                <StyledGoBackButtonContainer>
                    <StyledButton data-testid="goBackButton" onClick={() => dismissPost()}>&laquo; Go back</StyledButton>
                </StyledGoBackButtonContainer>
            }
        </StyledContainer>
    );
}

export default PostDetail;