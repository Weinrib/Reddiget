import React from 'react';
import styled from 'styled-components';
import { Button, StyledCenteredDiv } from '../common';

const StyledContainer = styled(StyledCenteredDiv)`
    position: sticky;
    top: 5%;
    z-index: 99999;
    background-color: #282c34;
    padding-top: 10px;
    padding-bottom: 10px;
    
    @media only screen and (max-height: 1400px) {
        top: 6%;
    }

    @media only screen and (max-height: 1200px) {
        top: 8%;
    }

    @media only screen and (max-height: 950px) {
        top: 8.5%;
    }

    @media only screen and (max-height: 850px) {
        top: 9.5%;
    }

    @media only screen and (max-height: 768px) {
        top: 10%;
    }

    @media only screen and (max-height: 750px) {
        top: 10.5%;
    }

    @media only screen and (max-height: 700px) {
        top: 12%;
    }
`;

interface PaginationProperties {
    pageBefore: string,
    pageAfter: string,
    firstAfterPage: string,
    getPreviousPage: (previousPage: string) => any;
    getNextPage: (nextPage: string) => any;
    dismissAllPosts: (nextPage: string) => any;
    loading: boolean;
    errorOnFetch: boolean;
}

const Pagination = ({pageBefore, pageAfter, getPreviousPage, getNextPage, loading, firstAfterPage, dismissAllPosts, errorOnFetch}: PaginationProperties) => {

    const isLoading = loading || errorOnFetch;
    return (
        <StyledContainer>
            <Button
                loading={isLoading || firstAfterPage === pageAfter}
                onClick={() => !loading && !errorOnFetch && firstAfterPage !== pageAfter && getPreviousPage(pageBefore)}
            >
                &laquo; Previous
            </Button>
            <Button loading={isLoading} onClick={() => !loading && pageAfter && dismissAllPosts(pageAfter)}>Dismiss all &#10005;</Button>
            <Button loading={isLoading} onClick={() => pageAfter && !loading && getNextPage(pageAfter)}>Next &raquo;</Button>
        </StyledContainer>
    )
};

export default Pagination;