import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

jest.mock('./externalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockUseExternalData = (data?: any, error?: Error) => ({
    data,
    isLoading: !Boolean(data),
    error,
  });

  beforeEach(() => {
    // Mock the external dependency
    (useExternalData as jest.Mock).mockImplementation(mockUseExternalData);
  });

  test('renders loading state when data is being fetched', async () => {
    useExternalData.mockReturnValue({ data: null, isLoading: true, error: null });
    render(<DesignArchitectureComponent />);
    
    expect(await screen.findByText(/loading.../i)).toBeInTheDocument();
  });

  test('displays content when data is available', async () => {
    const mockData = { title: 'Sample Title' };
    useExternalData.mockReturnValue({ data: mockData, isLoading: false, error: null });
    render(<DesignArchitectureComponent />);
    
    expect(await screen.findByText(/sample title/i)).toBeInTheDocument();
  });

  test('displays error message when fetching content fails', async () => {
    const mockError = new Error('Failed to fetch');
    useExternalData.mockReturnValue({ data: null, isLoading: false, error: mockError });
    render(<DesignArchitectureComponent />);
    
    expect(await screen.findByText(/failed to fetch/i)).toBeInTheDocument();
  });

  test('handles user interactions such as clicking a button', async () => {
    const mockData = { title: 'Sample Title' };
    useExternalData.mockReturnValue({ data: mockData, isLoading: false, error: null });
    render(<DesignArchitectureComponent />);
    
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    
    expect(await screen.findByText(/interaction successful/i)).toBeInTheDocument();
  });

  test('ensures component is accessible', () => {
    const mockData = { title: 'Sample Title' };
    useExternalData.mockReturnValue({ data: mockData, isLoading: false, error: null });
    render(<DesignArchitectureComponent />);
    
    expect(screen.getByRole('button', { name: /click me/i })).toBeVisible();
    expect(screen.getByText(/sample title/i)).toHaveAccessibleName(/sample title/i);
  });

  test('mocks external API calls and checks for proper data handling', async () => {
    const mockData = { title: 'Sample Title' };
    useExternalData.mockReturnValue({ data: mockData, isLoading: false, error: null });
    
    render(<DesignArchitectureComponent />);
    
    expect(useExternalData).toHaveBeenCalled();
  });

});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

jest.mock('./externalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockUseExternalData = (data?: any, error?: Error) => ({
    data,
    isLoading: !Boolean(data),
    error,
  });

  beforeEach(() => {
    // Mock the external dependency
    (useExternalData as jest.Mock).mockImplementation(mockUseExternalData);
  });

  test('renders loading state when data is being fetched', async () => {
    useExternalData.mockReturnValue({ data: null, isLoading: true, error: null });
    render(<DesignArchitectureComponent />);
    
    expect(await screen.findByText(/loading.../i)).toBeInTheDocument();
  });

  test('displays content when data is available', async () => {
    const mockData = { title: 'Sample Title' };
    useExternalData.mockReturnValue({ data: mockData, isLoading: false, error: null });
    render(<DesignArchitectureComponent />);
    
    expect(await screen.findByText(/sample title/i)).toBeInTheDocument();
  });

  test('displays error message when fetching content fails', async () => {
    const mockError = new Error('Failed to fetch');
    useExternalData.mockReturnValue({ data: null, isLoading: false, error: mockError });
    render(<DesignArchitectureComponent />);
    
    expect(await screen.findByText(/failed to fetch/i)).toBeInTheDocument();
  });

  test('handles user interactions such as clicking a button', async () => {
    const mockData = { title: 'Sample Title' };
    useExternalData.mockReturnValue({ data: mockData, isLoading: false, error: null });
    render(<DesignArchitectureComponent />);
    
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    
    expect(await screen.findByText(/interaction successful/i)).toBeInTheDocument();
  });

  test('ensures component is accessible', () => {
    const mockData = { title: 'Sample Title' };
    useExternalData.mockReturnValue({ data: mockData, isLoading: false, error: null });
    render(<DesignArchitectureComponent />);
    
    expect(screen.getByRole('button', { name: /click me/i })).toBeVisible();
    expect(screen.getByText(/sample title/i)).toHaveAccessibleName(/sample title/i);
  });

  test('mocks external API calls and checks for proper data handling', async () => {
    const mockData = { title: 'Sample Title' };
    useExternalData.mockReturnValue({ data: mockData, isLoading: false, error: null });
    
    render(<DesignArchitectureComponent />);
    
    expect(useExternalData).toHaveBeenCalled();
  });

});