import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../Card';
import { WithPromotedLabel } from '../Card';
import MOCK_DATA from '../mocks/CardMock.json';

it('should render Card component with props data', () => {
  render(<Card resData={MOCK_DATA} />);

  const name = screen.getByText('Dabba Garam (Homely Meals & More)');

  expect(name).toBeInTheDocument();
});

// Homework - test HOC : withPromotedLabel()
it('should render Card component with promoted label', () => {
  const CardWithPromotedLabel = WithPromotedLabel(Card);
  render(<CardWithPromotedLabel resData={MOCK_DATA} />);

  const label = screen.getByText('promoted');

  expect(label).toBeInTheDocument();
});
