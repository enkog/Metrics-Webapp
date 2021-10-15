import React from 'react';
import { render } from './test-utils';
import CountriesListing from '../components/CountriesListing';

describe('Countries Listing Component', () => {
  test('fetch and display countries', async () => {
    const { findByText } = render(<CountriesListing />);
    expect(await findByText('Algeria')).toBeInTheDocument();
  });
});
