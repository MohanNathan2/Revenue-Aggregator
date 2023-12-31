import { render, screen } from '@testing-library/react';
import App from './App';

// Test if the component renders without errors
test('renders the App component', () => {
  render(<App />);
  const appComponent = screen.getByTestId('app');
  expect(appComponent).toBeInTheDocument();
});

// Test if the product names are correctly displayed in the table
test('renders product names in the table', async () => {
  render(<App />);
  // Wait for data to be fetched and displayed
  const productNames = await screen.findAllByTestId('product-name');
  expect(productNames).toHaveLength(133); // Assuming there are 8 products in the test data

  // You can also check if specific product names are present
  expect(screen.getByText('Bok Choy')).toBeInTheDocument();
  expect(screen.getByText('Green Beans')).toBeInTheDocument();
  // Add more assertions for other product names as needed
  
});
