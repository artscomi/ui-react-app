import { render, fireEvent, screen } from "@testing-library/react";
import { ModalButtonSection } from ".";

describe("ModalButtonSection", () => {
  const handleClickMock = jest.fn();

  it("renders all buttons with the correct labels", () => {
    render(
      <ModalButtonSection
        handleClick={handleClickMock}
        activeTreatment="nails"
      />
    );

    expect(screen.getByText("Hair")).toBeInTheDocument();
    expect(screen.getByText("Nails")).toBeInTheDocument();
    expect(screen.getByText("Skin")).toBeInTheDocument();
    expect(screen.getByText("Beauty")).toBeInTheDocument();
  });

  it("calls the handleClick function when a button is clicked", () => {
    render(
      <ModalButtonSection
        handleClick={handleClickMock}
        activeTreatment="nails"
      />
    );

    fireEvent.click(screen.getByText("Hair"));
    expect(handleClickMock).toHaveBeenCalledWith("hair");

    fireEvent.click(screen.getByText("Nails"));
    expect(handleClickMock).toHaveBeenCalledWith("nails");

    fireEvent.click(screen.getByText("Skin"));
    expect(handleClickMock).toHaveBeenCalledWith("skin");

    fireEvent.click(screen.getByText("Beauty"));
    expect(handleClickMock).toHaveBeenCalledWith("beauty");
  });
});
