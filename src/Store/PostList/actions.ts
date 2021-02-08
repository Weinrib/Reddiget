import { FetchPostListAction, FetchPostListErrorAction, FetchPostListSuccessAction, FETCH_POST_LIST, FETCH_POST_LIST_ERROR, FETCH_POST_LIST_SUCCESS } from "./types";

export const fetchPostList = (): FetchPostListAction => {
    return {
        type: FETCH_POST_LIST,
        payload: null
    };
};

export const fetchPostListSuccess = (data: any): FetchPostListSuccessAction => {
    return {
        type: FETCH_POST_LIST_SUCCESS,
        payload: data
    };
};

export const fetchPostListError = (): FetchPostListErrorAction => {
    return {
        type: FETCH_POST_LIST_ERROR,
        payload: null
    };
};