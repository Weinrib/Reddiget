import { Post } from "../../types";
import { DISMISS_POST_ITEM, DISMISS_POST_LIST, DISMISS_SELECTED_POST, FETCH_POST_LIST, FETCH_POST_LIST_ERROR, FETCH_POST_LIST_SUCCESS, PostListAction, PostListState, SELECT_POST_ITEM } from "./types";

const initialState: PostListState = {
    loading: true,
    selectedPost: null,
    error: null,
    content: {
        data: [],
        before: null,
        after: null,
        firstAfterPage: null,
        modhash: ''
    }
};

export default (state: PostListState = initialState, action) => {
    const response = action.payload;
    switch (action.type) {
        case DISMISS_POST_LIST:
            return {
                loading: true,
                selectedPost: null,
                content: {
                    after: state.content.after,
                    firstAfterPage: null,
                    before: null,
                    data: []
                }
            };
        case FETCH_POST_LIST:
            return {
                loading: true,
                error: null,
                selectedPost: null,
                content: {
                    ...state.content,
                    data: []
                }
            };
        case FETCH_POST_LIST_SUCCESS:
            return {
                loading: false,
                content: {
                    ...state.content,
                    data: response?.children.map((post) => post.data),
                    firstAfterPage: state.content.firstAfterPage === null ? response.children.slice(-1)[0].data.name : state.content.firstAfterPage,
                    before: state.content.firstAfterPage === null ? null : response.children[0].data.name,
                    after: response.children.slice(-1)[0].data.name,
                    modhash: response?.modhash
                }
            }
        case FETCH_POST_LIST_ERROR:
            return {
                ...state,
                loading: false,
                error: response
            }
        case SELECT_POST_ITEM:
            return {
                ...state,
                selectedPost: response
            }
        case DISMISS_POST_ITEM:
            return {
                ...state,
                selectedPost: state.selectedPost ? state.selectedPost?.id === response ? null : { ...state.selectedPost } : null,
                content: {
                    ...state.content,
                    data: state.content.data.filter((post: Post) => post.id !== response)
                }
            }
        case DISMISS_SELECTED_POST:
            return {
                ...state,
                selectedPost: null
            }
        default:
            return state;
    }
};