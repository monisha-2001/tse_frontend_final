import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Importing jest-dom for matchers
import Navbar from "./components/Navbar"; // Import your component to be tested

describe('Navbar Component', () => {
  it('renders the Navbar with logo, name, and GitHub icon', () => {
    render(<Navbar />);

    // Assert that the logo is rendered
    const logo = screen.getByAltText('Your Company');
    expect(logo).toBeInTheDocument();

    // Assert that the name is rendered
    const name = screen.queryByText('TSE Initializer');
    expect(name).toBeInTheDocument();

    // Assert that the GitHub icon is a link to the correct URL
    const githubIcon = screen.getByAltText('github icon');
    expect(githubIcon).toBeInTheDocument();
    expect(githubIcon.parentElement).toHaveAttribute(
      'href',
      'https://github.com/ftlrecords/tse_initializer'
    );
  });
});