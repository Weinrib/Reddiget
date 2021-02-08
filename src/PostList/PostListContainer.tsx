import { ApplicationState } from "../Store/store";

import { connect } from 'react-redux';
import { fetchPostList } from "../Store/PostList/actions";
import PostList from "./PostList";

const mapStatetoProps = (state: ApplicationState) => ({
    postList: state.posts.content.data,
    loading: state.posts.loading,
    error: state.posts.error
});

const mapDispatchToProps = (dispatch) => ({
    getPostList: () => dispatch(fetchPostList(null, null))
});

export default connect(mapStatetoProps, mapDispatchToProps)(PostList);