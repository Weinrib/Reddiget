import { ApplicationState } from "../Store/store";

import { connect } from 'react-redux';
import PostDetail from "./PostDetail";

const mapStatetoProps = (state: ApplicationState) => {
    return state.posts.selectedPost
};

export default connect(mapStatetoProps, {})(PostDetail);