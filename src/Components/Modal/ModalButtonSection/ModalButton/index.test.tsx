import { render, fireEvent, screen } from '@testing-library/react';
import { ModalButton } from '.';

const handleClick = jest.fn();

test('renders ModalButton correctly', () => {
  render(
    <ModalButton
      Icon={() => <div data-testid="icon" />}
      label="Test Button"
      activeTreatment="beauty"
      treatment="beauty"
      handleClick={handleClick}
    />
  );

  expect(screen.getByText('Test Button')).toBeInTheDocument();
  expect(screen.getByTestId('icon')).toBeInTheDocument();
});

test('calls handleClick when button is clicked', () => {
  render(
    <ModalButton
      Icon={() => <div />}
      label="Test Button"
      activeTreatment="nails"
      treatment="nails"
      handleClick={handleClick}
    />
  );

  fireEvent.click(screen.getByText('Test Button'));

  expect(handleClick).toHaveBeenCalledWith('nails');
});
