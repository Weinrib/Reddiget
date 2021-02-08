import React from 'react';
import styled from 'styled-components';
import PostListItem from './PostListItem';
import { useSpring, animated, useTransition } from 'react-spring';
import { Post } from '../types';
import { Spinner } from '../Layout/common';

const StyledPageListContainer = styled.div`
    background-color: #282c34;
`;

interface PostListProperties {
    postList: Array<Post>;
    loading: boolean;
    getPostList: () => any;
};


const StyledSpinner = styled.div`
    display: flex;
    justify-content: center;
    padding: 100px;
`;

const PostList = ({ postList, loading, getPostList }: PostListProperties) => {

    const listTransitions = useTransition(postList, item => item.id, {
        from: { opacity: 0, display: 'hidden', transform: "translate3d(-25%, 0px, 0px)" },
        enter: { opacity: 1, transform: "translate3d(0%, 0px, 0px)" },
        leave: { opacity: 0, height: 'auto', transform: "translate3d(-25%, 0px, 0px)" }
    });

    React.useEffect(() => {
        getPostList();
    }, []);

    return (
        <StyledPageListContainer>
            {   true &&
                <StyledSpinner>
                    <Spinner loading={true}></Spinner>
                </StyledSpinner>
            }
            {!loading && false && listTransitions.map(({ item, props, key }) => {
                return (
                    item && <animated.div key={key} style={props}>
                        <PostListItem
                            key={key}
                            author={item.author}
                            created_utc={item.created_utc}
                            num_comments={item.num_comments}
                            id={item.id}
                            title={item.title}
                            thumbnail={item.thumbnail}
                            url={item.url}
                        />
                    </animated.div>
                )
            })}
        </StyledPageListContainer>
    );

}

export default PostList;