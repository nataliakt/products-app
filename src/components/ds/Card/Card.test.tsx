import { fireEvent, render, screen } from "@testing-library/react-native";
import Card from ".";
import { View } from "react-native";

describe("Text", () => {
  it("should render Card without onPress", () => {
    render(
      <Card>
        <View testID="children" />
      </Card>,
    );

    screen.getByTestId("children");
  });

  it("should render Card with onPress", () => {
    const mockedOnPress = jest.fn();
    render(
      <Card onPress={mockedOnPress}>
        <View testID="children" />
      </Card>,
    );

    const child = screen.getByTestId("children");
    fireEvent.press(child);

    expect(mockedOnPress).toHaveBeenCalledTimes(1);
  });
});
