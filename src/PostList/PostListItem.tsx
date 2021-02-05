import React from 'react';

interface PostListItemProperties {
    id: string;
    title: string;
    author: string;
    created_utc: number;
    url: string;
    thumbnail: string;
    num_comments: number;
}

const PostListItem = ({ id, title, author, created_utc, url, thumbnail, num_comments }: PostListItemProperties) => {
    return (
        <div>PostListItem</div>
    );
}

export default PostListItem;