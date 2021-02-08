import React, { SyntheticEvent } from 'react';
import styled, { css } from 'styled-components';
import Moment from 'react-moment';
import { StyledAuthorHeader, StyledAuthorSpan, StyledComments } from '../Layout/common';
import { Post } from '../types';
import { GET_THUMBNAIL } from '../common';
import { IMAGES_TO_BE_REPLACED_WITH_PLACEHOLDER_ON_LISTING } from '../Store/PostList/types';

interface PostListItemProperties {
    post: Partial<Post>;
    selectPost: (post: Partial<Post>) => any;
}

const StyledDiv = styled.div`
    color: white;
    border: 2px solid orangered;
    border-radius: 15px;
    margin-top: 5px;
    padding: 10px;
    transition: transform .2s ease-in;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    ${({ postWasRead }) => postWasRead && css`
        border-color: #ff450042;
    `}

    :hover {
        cursor: pointer;
        transform: scale(1.025);
        box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    }

    @media only screen and (max-width: 500px) {
        flex-direction: column;
    }
`;

const StyledDismissPostSpan = styled.span`
    color: white;
    font-size: 14px;
    padding: 10px;
    :hover {
        color: orangered
    }
`;

const StyledCardHeader = styled.div`
    text-align: right;
    order: 4;

    @media only screen and (max-width: 500px) {
        order: 1;
    }
`;

const StyledImageContainer = styled.div`
    max-height: 140px;
    max-width: 200px;
    display: flex;
    flex-basis: 40%;

    @media only screen and (max-width: 500px) {
        flex-basis: 100%;
    }
`;

const StyledPostContent = styled.div`
    display: flex;
    flex-grow: 1;    


    @media only screen and (max-width: 500px) {
        flex-wrap: wrap;
        order: 2;
        justify-content: center;
    }
`;

const StyledPostInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 15px;

    @media only screen and (max-width: 500px) {
        margin-top: 15px;
        align-items: center;
    }
`;

const StyledTitleLabel = styled.label`
    font-weight: bold;
    cursor: pointer;
    font-size: 17px;
    letter-spacing: 0.5px;
    ${({ postWasRead }) => postWasRead && css`
        color: lightgray;
    `}
`;

const PostListItem = ({ post, selectPost }: PostListItemProperties) => {

    const { id, thumbnail, url, title, author, created_utc, num_comments} = post;

    const [postWasRead, setPostWasRead] = React.useState(false);

    const onDismiss = (e: SyntheticEvent, id?: string) => {
        if(!id) return;

       // onRemove(id);
        e.stopPropagation();
    };

    const onClickThumbOpenOnNewTab = (e: SyntheticEvent, url?: string): void => {
        if (!url) return;

        window.open(url, '_blank');
        e.stopPropagation();
    };

    const togglePostDetail = (post: Partial<Post>) => {
        setPostWasRead(true);
        selectPost(post);
    };

    return (
        <StyledDiv postWasRead={postWasRead} onClick={() => togglePostDetail(post)}>
            <StyledCardHeader>
                <StyledDismissPostSpan onClick={(e) => onDismiss(e, id)}>&#10005;</StyledDismissPostSpan>
            </StyledCardHeader>
            <StyledPostContent>
                <StyledImageContainer onClick={(e) => onClickThumbOpenOnNewTab(e, url)}>
                    <img src={GET_THUMBNAIL(thumbnail)} width="100%" height="100%" />
                </StyledImageContainer>
                <StyledPostInfo>
                    <StyledTitleLabel postWasRead={postWasRead}>{title}</StyledTitleLabel>
                    <StyledAuthorHeader>
                        <span>{`Sent by `}<StyledAuthorSpan>{author}</StyledAuthorSpan>&nbsp;<Moment unix fromNow>{created_utc}</Moment></span>
                    </StyledAuthorHeader>
                    <StyledComments>
                        <span>{`${num_comments} comments`}</span>
                    </StyledComments>
                </StyledPostInfo>
            </StyledPostContent>
        </StyledDiv>
    );
}

export default PostListItem;