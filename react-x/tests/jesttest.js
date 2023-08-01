// SampleComponent.js
import React from 'react';

const SampleComponent = ({ text }) => {
  return <div>IT IS WORKING</div>;
};

export default SampleComponent;


// SampleComponent.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import SampleComponent from './SampleComponent';

test('renders text correctly', () => {
  const testText = 'Hello, world!';
  render(<SampleComponent text={testText} />);
  const textElement = screen.getByText(testText);
  expect(textElement).toBeInTheDocument();
});
