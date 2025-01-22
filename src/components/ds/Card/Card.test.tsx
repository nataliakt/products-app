import { render, screen } from "@testing-library/react-native";
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
});
