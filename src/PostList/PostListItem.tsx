import React, { SyntheticEvent } from 'react';
import styled, { css } from 'styled-components';
import Moment from 'react-moment';
import { StyledAuthorHeader, StyledAuthorSpan, StyledComments } from '../Layout/common';

interface PostListItemProperties {
    id: string;
    title: string;
    author: string;
    created_utc: number;
    url: string;
    thumbnail: string;
    num_comments: number;
    onRemove: (id: string) => any;
}

const StyledDiv = styled.div`
    color: white;
    border: 2px solid orangered;
    border-radius: 15px;
    margin-top: 5px;
    padding: 10px;
    transition: transform .2s ease-in;
    margin-left:20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    :hover {
        cursor: pointer;
        transform: scale(1.025);
        box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
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
    order: 4
`;

const StyledImageContainer = styled.div`
    max-height: 140px;
    max-width: 200px;
    display: flex;
    flex-basis: 40%;
`;

const StyledPostContent = styled.div`
    display: flex;
`;

const StyledPostInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 15px;
`;

const StyledTitleLabel = styled.label`
    font-weight: bold;
    cursor: pointer;
    font-size: 17px;
    letter-spacing: 0.5px;
    ${({postWasRead}) => postWasRead && css`
        color: lightgray;
    `}
`;

const PostListItem = ({ id, title, author, created_utc, url, thumbnail, num_comments, onRemove }: PostListItemProperties) => {

    const [postWasRead, setPostWasRead] = React.useState(false);

    const onDismiss = (e: SyntheticEvent, id: string) => {
        onRemove(id);
        e.stopPropagation();
    };

    return (
        <StyledDiv onClick={() => setPostWasRead(true)}>
            <StyledCardHeader>
                <StyledDismissPostSpan onClick={(e) => onDismiss(e, id)}>&#10005;</StyledDismissPostSpan>
            </StyledCardHeader>
            <StyledPostContent>
                <StyledImageContainer>
                    <img src={thumbnail} width="100%" height="100%"/>
                </StyledImageContainer>
                <StyledPostInfo>
                    <StyledTitleLabel postWasRead={postWasRead}>{title}</StyledTitleLabel>
                    <StyledAuthorHeader>
                        <span>{`Sent by `}<StyledAuthorSpan>{author}</StyledAuthorSpan>&nbsp;<Moment fromNow>{created_utc}</Moment></span>
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