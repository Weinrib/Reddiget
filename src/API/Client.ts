const axios = require('axios').default;

const REDDIT_FETCH_API = 'https://www.reddit.com/top/.json?limit=50'

export const fetchPostList = () => {
    return axios.get(REDDIT_FETCH_API)
        .then((response: any) => {
            return response?.data?.data;
        }).catch((error: any) => {
            debugger;
            return null;
        });
};