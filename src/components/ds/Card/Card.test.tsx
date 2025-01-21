import { fireEvent, render, screen } from "@testing-library/react-native";
import Card from ".";
import Text from "../Text";
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
    const onPress = jest.fn();
    render(
      <Card onPress={onPress} accessibilityRole="link">
        <View testID="children" />
      </Card>,
    );

    screen.getByTestId("children");

    const card = screen.getByRole("link");
    fireEvent.press(card);

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
