import { ApplicationState } from "../Store/store";

import { connect } from 'react-redux';
import PostDetail from "./PostDetail";
import { dismissSelectedPost } from "../Store/PostList/actions";

const mapStatetoProps = (state: ApplicationState) => ({
    post: state.posts.selectedPost as any,
});

const mapDispatchToProps = (dispatch) => ({
    dismissPost: () => dispatch(dismissSelectedPost())
});

export default connect(mapStatetoProps, mapDispatchToProps)(PostDetail);