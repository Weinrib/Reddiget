import { FETCH_POST_LIST_ERROR, FETCH_POST_LIST_SUCCESS, PostListAction, PostListState, SELECT_POST_ITEM } from "./types";

const initialState: PostListState = {
    loading: true,
    selectedPost: null,
    content: {
        data: [],
        before: '',
        after: '',
        modhash: ''
    }
};

export default (state: PostListState = initialState, action) => {
    const response = action.payload;
    switch (action.type) {
        case FETCH_POST_LIST_SUCCESS:
            return {
                loading: false,
                content: {
                    data: response?.children.map((post) => post.data),
                    before: response?.before,
                    after: response?.after,
                    modhash: response?.modhash
                }
            }
        case FETCH_POST_LIST_ERROR:
            return {
                ...state,
                loading: false
            }
        case SELECT_POST_ITEM:
            return {
                ...state,
               selectedPost: response
            }
        default:
            return state;
    }
};