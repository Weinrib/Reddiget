import { screen } from '@testing-library/react';
import moment from 'moment';
import React from 'react';
import { DEVICE_APPLIES_FOR_SPLIT_LAYOUT } from '../../common';
import PostDetail from '../../PostDetail/PostDetail';
import { renderWithReduxStore } from '../TestUtils';
describe('Testing PostDetail component', () => {

    const initialProps = {
        post: {
            author: 'Gonzalo',
            title: 'Some title',
            url: 'https://i.redd.it/jvdlaclqj3g61.jpg',
            created_utc: 1612767025,
            num_comments: 1231231,
        }
    }

    const setup = (props?: any) => {
        return renderWithReduxStore(<PostDetail {...initialProps} {...props}></PostDetail>);
    }

    test('Tests for a common post structure to be correct', () => {
        setup();
        const title = screen.getByText(initialProps.post.title);
        const author = screen.getByText(initialProps.post.author);
        const createdDate = screen.getByText(moment.unix(initialProps.post.created_utc).fromNow());
        const comments = screen.getByText(`${initialProps.post.num_comments} comments`);

        expect(title).toBeInTheDocument();
        expect(author).toBeInTheDocument();
        expect(createdDate).toBeInTheDocument();
        expect(comments).toBeInTheDocument();
    });


    test('Tests for non-split screen to have the back button ', () => {
        setup();
        Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: 200});

        const goBackButton = screen.getByTestId("goBackButton");

        expect(goBackButton).toBeInTheDocument();
        expect(DEVICE_APPLIES_FOR_SPLIT_LAYOUT).toBe(false);
    });
});