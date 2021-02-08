import { render, screen } from '@testing-library/react';
import React from 'react';
import Navbar from '../../Layout/Navbar';
import RedditLogo from '../../resources/reddit_icon_svg.svg';

describe('Testing navbar component', () => {

    test('Tests that the logo and title are present', () => {
        render(<Navbar/>);
        
        const appTitle = screen.getByText("Reddiget");
        const logo = screen.getByTestId("navbar-logo")

        expect(appTitle).toBeInTheDocument();
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('src', RedditLogo)
    });
});