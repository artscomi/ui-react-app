import { render, screen, fireEvent } from "@testing-library/react";
import { Tabs } from ".";

describe("Tabs", () => {
  it("should render the Tabs component with the initial active tab", () => {
    render(<Tabs />);
    const hairTab = screen.getByText("Hair");
    expect(hairTab).toHaveStyle('border-bottom-color: #4036ED');
  });

  it("should switch to the selected tab when clicked", () => {
    render(<Tabs />);
    const nailsTab = screen.getByText("Nails");
    fireEvent.click(nailsTab);
    expect(nailsTab).toHaveStyle('border-bottom-color: #4036ED');
  });

  it("should display the correct BookCard components when the tab is changed", () => {
    render(<Tabs />);
    const nailsTab = screen.getByText("Nails");
    const wellnessTab = screen.getByText("Wellness");
    fireEvent.click(nailsTab);
    expect(screen.getAllByTestId("book-card")).toHaveLength(1);
    fireEvent.click(wellnessTab);
    expect(screen.getAllByTestId("book-card")).toHaveLength(3);
  });
});
