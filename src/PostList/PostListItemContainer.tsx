import { connect } from 'react-redux';
import { dismissPostItem, selectPostItem } from '../Store/PostList/actions';
import { Post } from '../types';
import PostListItem from "./PostListItem";

const mapDispatchToProps = (dispatch) => ({
    selectPost: (post: Partial<Post>) => dispatch(selectPostItem(post)),
    dismissPost: (postId: string) => dispatch(dismissPostItem(postId))
});

export default connect(null, mapDispatchToProps)(PostListItem);