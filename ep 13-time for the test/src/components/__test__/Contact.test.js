import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

describe('Contact Page Test Cases', () => {
  // beforeAll(() => {
  //   console.log('Before All');
  // });
  // beforeEach(() => {
  //   console.log('Before Each');
  // });
  // afterEach(() => {
  //   console.log('After Each');
  // });
  // afterAll(() => {
  //   console.log('After All');
  // });

  it('Should load Contact component', () => {
    // render
    render(<Contact />); // it will be rendered on js dom

    // Querying - return piece of JSX, React Element or React Fiber Node
    const heading = screen.getByRole('heading');

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it('Should load input name inside Contact component', () => {
    render(<Contact />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  test('Should load 2 input boxes on the Contact Component', () => {
    render(<Contact />);

    //   Whenever there are multiple items we use All.
    const inputBoxes = screen.getAllByRole('textbox');

    expect(inputBoxes.length).toBe(2);
  });
});
