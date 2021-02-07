import { FETCH_POST_LIST_ERROR, FETCH_POST_LIST_SUCCESS, PostListAction, PostListState } from "./types";

const initialState: PostListState = {
    loading: true,
    content: {
        data: [],
        before: '',
        after: '',
        modhash: ''
    }
};

export default (state: PostListState = initialState, action: PostListAction) => {
    const response = action?.payload?.content;
    switch (action.type) {
        case FETCH_POST_LIST_SUCCESS:
            return {
                loading: false,
                content: {
                    data: response?.data,
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
        default:
            return state;
    }
};