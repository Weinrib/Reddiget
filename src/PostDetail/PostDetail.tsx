import React from 'react';
import Moment from 'react-moment';
import styled from 'styled-components';
import { CHECK_IF_GIFV, REPLACE_GIFV_WITH_MP4 } from '../common';
import { FLEX_CENTER_STYLE, StyledAuthorHeader, StyledAuthorSpan, StyledCenteredDiv, StyledComments } from '../Layout/common';
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
    max-width: 300px;
    max-height: 400px;


    @media only screen and (max-width: 1000px) {
        max-width: 200px;
        max-height: 300px;
    }

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
};

const PostDetail = (post: Partial<Post>) => {

    const { title, author, created_utc, num_comments, selftext, is_video, is_self, url, media } = post;

    React.useEffect(() => {
        console.log(post);
    }, [post])

    const imageIsGifv = CHECK_IF_GIFV(url);

    return (
        <StyledContainer>
            <StyledTitleContainer>
                <h3>{title}</h3>
            </StyledTitleContainer>
            {   !is_self
                && <StyledImageContainer>
                    {!is_video && !imageIsGifv && <img src={url} />}
                    {is_video && <video autoPlay={true} src={media?.reddit_video.fallback_url} />}
                    {imageIsGifv && 
                    <video preload="auto" autoPlay loop>
                        <source src={REPLACE_GIFV_WITH_MP4(url)} type="video/mp4"></source>    
                    </video>
                    }
                </StyledImageContainer>
            }
            <div>{selftext}</div>
            <StyledAuthorHeader style={FLEX_WITH_MARGIN_STYLE}>
                <span>{`Sent by `}<StyledAuthorSpan>{author}</StyledAuthorSpan>&nbsp;<Moment unix fromNow>{created_utc}</Moment></span>
            </StyledAuthorHeader>
            <StyledComments style={FLEX_WITH_MARGIN_STYLE}>
                <span>{`${num_comments} comments`}</span>
            </StyledComments>
        </StyledContainer>
    );
}

export default PostDetail;