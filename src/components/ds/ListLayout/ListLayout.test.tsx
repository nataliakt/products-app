import { render, screen } from "@testing-library/react-native";
import ListLayout from ".";
import Text from "../Text";

describe("ListLayout", () => {
  it("should render", () => {
    render(
      <ListLayout
        data={[1, 2]}
        renderItem={({ item }) => <Text variant="body">Item {item}</Text>}
      />,
    );

    screen.getByText("Item 1");
    screen.getByText("Item 2");
  });
});
