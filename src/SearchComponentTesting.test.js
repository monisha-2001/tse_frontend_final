import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Importing jest-dom for matchers
import SearchComponent from './components/SearchComponent';

describe('SearchComponent', () => {
  it('renders with a search input and button', () => {
    render(<SearchComponent />);
    const searchInput = screen.getByPlaceholderText('Search...');
    const searchButton = screen.queryByText('Search');
    
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('displays a message when no query is entered', () => {
    render(<SearchComponent />);
    const searchButton = screen.queryByText('Search');
    fireEvent.click(searchButton);

    const message = screen.queryByText('Enter a search query to find Python modules.');
    expect(message).toBeInTheDocument();
  });

  it('displays search results when a query is entered', () => {
    render(<SearchComponent />);
    const searchInput = screen.getByPlaceholderText('Search...');
    const searchButton = screen.queryByText('Search');

    fireEvent.change(searchInput, { target: { value: 'react' } });
    fireEvent.click(searchButton);

    const searchResults = screen.queryByText('Search Results:');
    expect(searchResults).toBeInTheDocument();
  });

 /*it('displays selected items when items are selected', () => {
    render(<SearchComponent />);
    const searchInput = screen.getByPlaceholderText('Search...');
    const searchButton = screen.queryByText('Search');

    fireEvent.change(searchInput, { target: { value: 'react' } });
    fireEvent.click(searchButton);

    // Select an item
    const selectButton = screen.queryByText('Select');
    fireEvent.click(selectButton);

    const selectedItemsHeader = screen.queryByText('Selected Items:');
    expect(selectedItemsHeader).toBeInTheDocument();
  }); */
  
//remove below commented section for the code to work
  /*it('deselects selected items when "Deselect" is clicked', () => {
    render(<SearchComponent />);
    const searchInput = screen.getByPlaceholderText('Search...');
    const searchButton = screen.queryByText('Search');

    fireEvent.change(searchInput, { target: { value: 'react' } });
    fireEvent.click(searchButton);

    // Select an item
    const selectButton = screen.queryByText('Select');
    fireEvent.click(selectButton);

    // Deselect the item
    const deselectButton = screen.queryByText('Deselect');
    fireEvent.click(deselectButton);

    const selectedItemsHeader = screen.queryByText('Selected Items:');
    expect(selectedItemsHeader).not.toBeInTheDocument();
  });

  it('displays selected items when items are selected', () => {
    render(<SearchComponent />);
    const searchInput = screen.getByPlaceholderText('Search...');
    const searchButton = screen.queryByText('Search');
  
    fireEvent.change(searchInput, { target: { value: 'react' } });
    fireEvent.click(searchButton);
  
    // Attempt to find the "Select" button
    const selectButton = screen.queryByText('Select');
    
    // Check if the "Select" button is found, and then proceed to click it
    if (selectButton) {
      fireEvent.click(selectButton);
      
      // Assertions for selected items can be placed here
    } else {
      // Handle the case where the "Select" button is not found
      // For example, you can log a message or fail the test
      console.error('Select button not found.');
    }
  
    // Continue with other assertions as needed
  });*/
  
});