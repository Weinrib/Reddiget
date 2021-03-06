const axios = require('axios').default;

const REDDIT_FETCH_API = 'https://www.reddit.com/top/.json?limit=50'

export const fetchPostList = (before: string | null, after: string | null) => {
    let URI = REDDIT_FETCH_API;

    if (before) {
        URI = URI.concat(`&before=${before}`);
    }
    if (after) {
        URI = URI.concat(`&after=${after}`);
    }

    return axios.get(URI, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response: any) => {
        return response?.data?.data;
    }).catch(error => {
        throw {
            message: 'Error while fetching the posts, please try again later.'
        }
    });
};