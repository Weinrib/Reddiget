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

    const [postWasRead, setPostWasRead] = React.useState(false);

    return (
        <div>
            <header>{author} {created_utc}</header>
            <img src={thumbnail} alt={title}></img>
            <label>{title}</label>
            <div>
                <button>Dismiss Post</button>
                <span>{`${num_comments} comments`}</span>
            </div>
        </div>
    );
}

export default PostListItem;