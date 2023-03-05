import { render, screen, fireEvent } from "@testing-library/react";
import { Tabs } from ".";

describe("Tabs", () => {
  it("should render the Tabs component with the initial active tab", () => {
    render(<Tabs />);
    const hairTab = screen.getByText("Hair");
    const activeBorder = screen.getByTestId("tab-active-border");
    expect(hairTab).toHaveStyle("color: #071948");
    expect(activeBorder).toBeInTheDocument()
  });

  it("should switch to the selected tab when clicked", () => {
    render(<Tabs />);
    const nailsTab = screen.getByText("Nails");
    expect(nailsTab).toHaveStyle("color: #B5BAC8");
    fireEvent.click(nailsTab);
    expect(nailsTab).toHaveStyle("color: #071948");
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
