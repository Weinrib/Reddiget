import { connect } from 'react-redux';
import App from './App';
import { ApplicationState } from './Store/store';

const mapStatetoProps = (state: ApplicationState) => ({
    isPostSelected: Boolean(state.posts.selectedPost)
});

export default connect(mapStatetoProps)(App);