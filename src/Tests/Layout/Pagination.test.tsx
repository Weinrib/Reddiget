import React from 'react';
import { render, screen } from '@testing-library/react';
import PaginationContainer from '../../Layout/Pagination/PaginationContainer';
import { renderWithReduxStore } from '../TestUtils';
describe('Testing pagination component', () => {


    const setup = (props?: any) => {
        return renderWithReduxStore(<PaginationContainer {...props}></PaginationContainer>);
    }

    test('Tests all buttons to be present and disabled', () => {
        setup({loading: true});
        
        const previousButton = screen.getByText("« Previous");
        const dismissButton = screen.getByText("Dismiss all ✕");
        const nextButton = screen.getByText("Next »");

        const disabledStyle = {
            opacity: '0.6',
            cursor: 'not-allowed'
        };

        expect(previousButton).toBeInTheDocument();
        expect(previousButton).toHaveStyle(disabledStyle);
        expect(dismissButton).toBeInTheDocument();
        expect(dismissButton).toHaveStyle(disabledStyle);
        expect(nextButton).toBeInTheDocument();
        expect(nextButton).toHaveStyle(disabledStyle);
    });
});