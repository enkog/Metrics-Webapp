import React from 'react';
import { render } from './test-utils';
import CountryDetail from '../components/countryDetail';

describe('Countries Detail Component', () => {
  test('fetch and display countries', async () => {
    const { findByText } = render(<CountryDetail />);
    expect(await findByText('Region')).toBeInTheDocument();
  });
});
