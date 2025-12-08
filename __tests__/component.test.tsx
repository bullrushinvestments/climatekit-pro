import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalService: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders core functionality component correctly', async () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('handles user interaction with button click', async () => {
    const mockHandleClick = jest.fn();
    render(<CoreFunctionalityComponent onClick={mockHandleClick} />);

    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => expect(mockHandleClick).toHaveBeenCalled());
  });

  test('displays loading state when fetching data', async () => {
    (useExternalService as jest.Mock).mockReturnValue({ isLoading: true, data: null });
    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('renders error message when fetch fails', async () => {
    (useExternalService as jest.Mock).mockReturnValue({ isError: true, error: 'Error fetching data' });
    render(<CoreFunctionalityComponent />);

    expect(screen.getByText(/error fetching data/i)).toBeInTheDocument();
  });

  test('ensures accessibility features are implemented correctly', async () => {
    const { container } = render(<CoreFunctionalityComponent />);
    
    // Check for proper aria-labels
    screen.getByRole('button', { name: /click me/i }).closest('[aria-label="submit button"]');
    
    expect(container.querySelector('.sr-only')).toBeInTheDocument();
  });

  test('handles edge cases such as empty data', async () => {
    (useExternalService as jest.Mock).mockReturnValue({ isLoading: false, data: [] });
    render(<CoreFunctionalityComponent />);

    expect(screen.getByText(/no items available/i)).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalService: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders core functionality component correctly', async () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('handles user interaction with button click', async () => {
    const mockHandleClick = jest.fn();
    render(<CoreFunctionalityComponent onClick={mockHandleClick} />);

    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => expect(mockHandleClick).toHaveBeenCalled());
  });

  test('displays loading state when fetching data', async () => {
    (useExternalService as jest.Mock).mockReturnValue({ isLoading: true, data: null });
    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('renders error message when fetch fails', async () => {
    (useExternalService as jest.Mock).mockReturnValue({ isError: true, error: 'Error fetching data' });
    render(<CoreFunctionalityComponent />);

    expect(screen.getByText(/error fetching data/i)).toBeInTheDocument();
  });

  test('ensures accessibility features are implemented correctly', async () => {
    const { container } = render(<CoreFunctionalityComponent />);
    
    // Check for proper aria-labels
    screen.getByRole('button', { name: /click me/i }).closest('[aria-label="submit button"]');
    
    expect(container.querySelector('.sr-only')).toBeInTheDocument();
  });

  test('handles edge cases such as empty data', async () => {
    (useExternalService as jest.Mock).mockReturnValue({ isLoading: false, data: [] });
    render(<CoreFunctionalityComponent />);

    expect(screen.getByText(/no items available/i)).toBeInTheDocument();
  });
});