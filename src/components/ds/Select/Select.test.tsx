import { act, fireEvent, render, screen } from "@testing-library/react-native";
import Select from ".";

describe("Select", () => {
  it("should render with label", () => {
    render(<Select label="Select" checked onPress={() => {}} />);

    screen.getByText("Select");
  });

  it("should should call onPress", async () => {
    const onPress = jest.fn();
    render(<Select label="Select" checked={false} onPress={onPress} />);

    const select = screen.getByText("Select");
    fireEvent.press(select);

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
