import { render, fireEvent, screen } from "@testing-library/react";
import { Modal } from ".";

describe("Modal", () => {
  it("renders correctly", () => {
    const onClose = jest.fn();
    render(<Modal onClose={onClose} />);

    expect(screen.getByText("Search")).toBeInTheDocument();
    expect(screen.getByLabelText("Close modal dialog")).toBeInTheDocument();
  });

  it("calls onClose when Close button is clicked", () => {
    const onClose = jest.fn();
    render(<Modal onClose={onClose} />);

    fireEvent.click(screen.getByLabelText("Close modal dialog"));
    expect(onClose).toHaveBeenCalled();
  });
});
