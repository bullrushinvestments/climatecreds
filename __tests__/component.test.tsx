import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import userEvent from '@testing-library/user-event';
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  const mockUseExternalData = (value) => ({
    data: value,
    loading: false,
    error: null,
  });

  beforeEach(() => {
    jest.clearAllMocks();
    (useExternalData as jest.Mock).mockImplementation(mockUseExternalData);
  });

  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    (useExternalData as jest.Mock).mockImplementation(() => ({
      data: null,
      loading: true,
      error: null,
    }));
    render(<CoreFunctionalityComponent />);
    expect(await screen.findByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message when fetching data fails', async () => {
    (useExternalData as jest.Mock).mockImplementation(() => ({
      data: null,
      loading: false,
      error: new Error('Failed to fetch data'),
    }));
    render(<CoreFunctionalityComponent />);
    expect(await screen.findByText(/failed to fetch data/i)).toBeInTheDocument();
  });

  test('handles user interaction with buttons', async () => {
    const mockHandleClick = jest.fn();
    render(<CoreFunctionalityComponent onClick={mockHandleClick} />);

    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });

  test('tests accessibility features', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveAttribute('aria-label', 'Click Me Button');
    expect(button).toBeVisible();
    userEvent.tab(); // simulate tabbing to the button
    expect(document.activeElement).toBe(button);
  });

  test('mocks external dependencies', () => {
    const mockExternalData = { key: 'value' };
    (useExternalData as jest.Mock).mockImplementation(() => ({
      data: mockExternalData,
      loading: false,
      error: null,
    }));
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/value/i)).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import userEvent from '@testing-library/user-event';
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  const mockUseExternalData = (value) => ({
    data: value,
    loading: false,
    error: null,
  });

  beforeEach(() => {
    jest.clearAllMocks();
    (useExternalData as jest.Mock).mockImplementation(mockUseExternalData);
  });

  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    (useExternalData as jest.Mock).mockImplementation(() => ({
      data: null,
      loading: true,
      error: null,
    }));
    render(<CoreFunctionalityComponent />);
    expect(await screen.findByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message when fetching data fails', async () => {
    (useExternalData as jest.Mock).mockImplementation(() => ({
      data: null,
      loading: false,
      error: new Error('Failed to fetch data'),
    }));
    render(<CoreFunctionalityComponent />);
    expect(await screen.findByText(/failed to fetch data/i)).toBeInTheDocument();
  });

  test('handles user interaction with buttons', async () => {
    const mockHandleClick = jest.fn();
    render(<CoreFunctionalityComponent onClick={mockHandleClick} />);

    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });

  test('tests accessibility features', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveAttribute('aria-label', 'Click Me Button');
    expect(button).toBeVisible();
    userEvent.tab(); // simulate tabbing to the button
    expect(document.activeElement).toBe(button);
  });

  test('mocks external dependencies', () => {
    const mockExternalData = { key: 'value' };
    (useExternalData as jest.Mock).mockImplementation(() => ({
      data: mockExternalData,
      loading: false,
      error: null,
    }));
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/value/i)).toBeInTheDocument();
  });
});