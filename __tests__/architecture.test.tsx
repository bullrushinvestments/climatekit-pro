import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import DesignArchitecture from './DesignArchitecture';

jest.mock('./api', () => ({
  fetchDesignData: jest.fn(),
}));

describe('Design Architecture Component', () => {
  const mockFetchDesignData = (data?: any) => {
    return jest.fn().mockResolvedValue(data);
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', async () => {
    render(<DesignArchitecture />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('displays error message when data fetching fails', async () => {
    const mockError = new Error('Failed to fetch design data');
    (fetchDesignData as jest.Mock).mockRejectedValue(mockError);
    render(<DesignArchitecture />);

    await waitFor(() => expect(screen.getByText(/error/i)).toBeInTheDocument());
  });

  it('displays fetched data when successful', async () => {
    const mockData = { id: '123', name: 'Sample Design' };
    (fetchDesignData as jest.Mock).mockResolvedValue(mockData);
    render(<DesignArchitecture />);

    await waitFor(() => expect(screen.getByText(/sample design/i)).toBeInTheDocument());
  });

  it('handles user interaction with buttons', async () => {
    const mockData = { id: '123', name: 'Sample Design' };
    (fetchDesignData as jest.Mock).mockResolvedValue(mockData);
    render(<DesignArchitecture />);

    fireEvent.click(screen.getByRole('button', { name: /view design/i }));
    expect(fetchDesignData).toHaveBeenCalled();
  });

  it('ensures accessibility features are implemented correctly', async () => {
    const mockData = { id: '123', name: 'Sample Design' };
    (fetchDesignData as jest.Mock).mockResolvedValue(mockData);
    render(<DesignArchitecture />);

    expect(screen.getByRole('button', { name: /view design/i })).toBeVisible();
    expect(screen.getByRole('button', { name: /view design/i })).toHaveAttribute('aria-label');
  });

  it('handles edge cases such as empty data response', async () => {
    const mockData = {};
    (fetchDesignData as jest.Mock).mockResolvedValue(mockData);
    render(<DesignArchitecture />);

    await waitFor(() => expect(screen.getByText(/no design available/i)).toBeInTheDocument());
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import DesignArchitecture from './DesignArchitecture';

jest.mock('./api', () => ({
  fetchDesignData: jest.fn(),
}));

describe('Design Architecture Component', () => {
  const mockFetchDesignData = (data?: any) => {
    return jest.fn().mockResolvedValue(data);
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', async () => {
    render(<DesignArchitecture />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('displays error message when data fetching fails', async () => {
    const mockError = new Error('Failed to fetch design data');
    (fetchDesignData as jest.Mock).mockRejectedValue(mockError);
    render(<DesignArchitecture />);

    await waitFor(() => expect(screen.getByText(/error/i)).toBeInTheDocument());
  });

  it('displays fetched data when successful', async () => {
    const mockData = { id: '123', name: 'Sample Design' };
    (fetchDesignData as jest.Mock).mockResolvedValue(mockData);
    render(<DesignArchitecture />);

    await waitFor(() => expect(screen.getByText(/sample design/i)).toBeInTheDocument());
  });

  it('handles user interaction with buttons', async () => {
    const mockData = { id: '123', name: 'Sample Design' };
    (fetchDesignData as jest.Mock).mockResolvedValue(mockData);
    render(<DesignArchitecture />);

    fireEvent.click(screen.getByRole('button', { name: /view design/i }));
    expect(fetchDesignData).toHaveBeenCalled();
  });

  it('ensures accessibility features are implemented correctly', async () => {
    const mockData = { id: '123', name: 'Sample Design' };
    (fetchDesignData as jest.Mock).mockResolvedValue(mockData);
    render(<DesignArchitecture />);

    expect(screen.getByRole('button', { name: /view design/i })).toBeVisible();
    expect(screen.getByRole('button', { name: /view design/i })).toHaveAttribute('aria-label');
  });

  it('handles edge cases such as empty data response', async () => {
    const mockData = {};
    (fetchDesignData as jest.Mock).mockResolvedValue(mockData);
    render(<DesignArchitecture />);

    await waitFor(() => expect(screen.getByText(/no design available/i)).toBeInTheDocument());
  });
});