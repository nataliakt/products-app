import { fireEvent, render, screen } from "@testing-library/react-native";
import Button from ".";

describe("Button", () => {
  it("should render with title", () => {
    render(<Button title="Press Me" />);

    screen.getByText("Press Me");
  });

  it("should call onPress", () => {
    const onPress = jest.fn();
    render(<Button title="Press Me" onPress={onPress} />);

    const button = screen.getByText("Press Me");
    fireEvent.press(button);

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
