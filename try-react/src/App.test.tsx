import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('component app', () => {

  it('renders main nav', () => {

    const sampleText = "abc"
    const {getByTestId } = render(<App />);
    const input = getByTestId("test-input")

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("");

    fireEvent.change(input, {target: {value: sampleText}});

    expect(input).toHaveValue(sampleText);

  })

  it('chack matching snapshot', () => {

    const {baseElement} = render(<App />);

    expect(baseElement).toMatchSnapshot();

  })

})


describe('mock test', () => {

  it('renders mock data', () => {

    const fullName = "John Doe"


  })

})
