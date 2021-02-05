import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';

interface PostListItemProperties {
    id: string;
    title: string;
    author: string;
    created_utc: number;
    url: string;
    thumbnail: string;
    num_comments: number;
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
    max-width: 150px;
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
`;

const StyledAuthorHeader = styled.header`
    font-size: 14px;
    color: lightgray;
`;

const StyledComments = styled.div`
    margin-top:15px;
    color: lightgray;
    :hover {
        color: white;
    }
`;

const PostListItem = ({ id, title, author, created_utc, url, thumbnail, num_comments }: PostListItemProperties) => {

    const [postWasRead, setPostWasRead] = React.useState(false);

    return (
        <StyledDiv>
            <StyledCardHeader>
                <StyledDismissPostSpan>&#10005;</StyledDismissPostSpan>
            </StyledCardHeader>
            <StyledPostContent>
                <StyledImageContainer>
                    <img src={thumbnail} width="100%" height="100%"/>
                </StyledImageContainer>
                <StyledPostInfo>
                    <StyledTitleLabel>{title}</StyledTitleLabel>
                    <StyledAuthorHeader>
                        <span>{`Sent by ${author} `}<Moment fromNow>{created_utc}</Moment></span>
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