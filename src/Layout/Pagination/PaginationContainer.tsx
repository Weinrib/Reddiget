import { connect } from 'react-redux';
import { dismissPostList, fetchPostList } from '../../Store/PostList/actions';
import { ApplicationState } from '../../Store/store';
import Pagination from './Pagination';

const mapStatetoProps = (state: ApplicationState) => ({
    pageBefore: state.posts.content.before as any,
    pageAfter: state.posts.content.after as any,
    firstAfterPage: state.posts.content.firstAfterPage as any,
    loading: state.posts.loading
});

const mapDispatchToProps = (dispatch) => ({
    getPreviousPage: (previousPage: string) => dispatch(fetchPostList(previousPage, null)),
    getNextPage: (nextPage: string) => dispatch(fetchPostList(null, nextPage)),
    dismissAllPosts: (nextPage: string) => dispatch(dismissPostList(nextPage))
});

export default connect(mapStatetoProps, mapDispatchToProps)(Pagination);