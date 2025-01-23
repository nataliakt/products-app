import { fireEvent, render, screen } from "@testing-library/react-native";
import ErrorBoundary from "./";

const ProblematicComponent = () => {
  throw new Error("Test error");
};

describe("ErrorBoundary", () => {
  it("should render the fallback UI on error", () => {
    render(
      <ErrorBoundary>
        <ProblematicComponent />
      </ErrorBoundary>,
    );

    screen.getByText("Something went wrong");
  });

  it("should call the reload function when provided", async () => {
    const mockReload = jest.fn();
    render(
      <ErrorBoundary reload={mockReload}>
        <ProblematicComponent />
      </ErrorBoundary>,
    );

    const reloadButton = screen.getByText("Reload");
    fireEvent.press(reloadButton);

    expect(mockReload).toHaveBeenCalledTimes(1);
  });
});
