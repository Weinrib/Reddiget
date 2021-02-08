import { connect } from 'react-redux';
import { selectPostItem } from '../Store/PostList/actions';
import { Post } from '../types';
import PostListItem from "./PostListItem";

const mapDispatchToProps = (dispatch) => ({
    selectPost: (post: Partial<Post>) => dispatch(selectPostItem(post))
});


export default connect(null, mapDispatchToProps)(PostListItem);