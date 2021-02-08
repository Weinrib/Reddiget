import React from 'react';
import styled from 'styled-components';
import PostListItem from './PostListItem';
import { useSpring, animated, useTransition } from 'react-spring';
import { Post } from '../types';
import { Spinner } from '../Layout/common';
import PostListItemContainer from './PostListItemContainer';

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

    const listTransitions = useTransition(postList, item => item && item.id, {
        config: {duration: 500},
        from: { opacity: 0, display: 'hidden', transform: "translate3d(-25%, 0px, 0px)" },
        enter: { opacity: 1, transform: "translate3d(0%, 0px, 0px)" },
        leave: { opacity: 0, height: 'auto', transform: "translate3d(-25%, 0px, 0px)" }
    });

    React.useEffect(() => {
        getPostList();
    }, []);

    return (
        <StyledPageListContainer>
            {   loading &&
                <StyledSpinner>
                    <Spinner loading={true}></Spinner>
                </StyledSpinner>
            }
            {!loading && listTransitions.map(({ item, props, key }) => {
                return (
                    item && <animated.div key={key} style={props}>
                        <PostListItemContainer post={item}/>
                    </animated.div>
                )
            })}
        </StyledPageListContainer>
    );

}

export default PostList;