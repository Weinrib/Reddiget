import { render, screen } from '@testing-library/react';
import moment from 'moment';
import React from 'react';
import PostListItem from '../../PostList/PostListItem';

describe('Testing PostItem component asd', () => {

    const initialProps = {
        post: {
            author: 'Gonzalo',
            title: 'Some title',
            url: 'https://i.redd.it/jvdlaclqj3g61.jpg',
            created_utc: 1612767025,
            num_comments: 1231231,
            thumbnail: 'https://i.redd.it/jvdlaclqj3g61.jpg'
        }
    }

    const setup = (props?: any) => {
        return render(<PostListItem {...initialProps} {...props}/>);
    }

    test('Tests for a common post item structure to be correct', () => {
        setup();
        const title = screen.getByText(initialProps.post.title);
        const author = screen.getByText(initialProps.post.author);
        const createdDate = screen.getByText(moment.unix(initialProps.post.created_utc).fromNow());
        const comments = screen.getByText(`${initialProps.post.num_comments} comments`);
        const image = screen.getByTestId("postItemImage");

        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', initialProps.post.url);
        expect(title).toBeInTheDocument();
        expect(author).toBeInTheDocument();
        expect(createdDate).toBeInTheDocument();
        expect(comments).toBeInTheDocument();
    });
});