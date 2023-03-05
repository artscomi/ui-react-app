import { renderHook } from "@testing-library/react-hooks";
import { useHandleScroll } from "./useHandleScroll";

describe("useHandleScroll", () => {
  it("calls the onScroll callback when the window is scrolled", () => {
    const onScroll = jest.fn();
    renderHook(() => useHandleScroll(onScroll));

    // Simulate a scroll event on the window
    window.dispatchEvent(new Event("scroll"));

    expect(onScroll).toHaveBeenCalled();
  });
});
