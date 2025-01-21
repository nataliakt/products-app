import { render, screen } from "@testing-library/react-native";
import Text from ".";
import { variants } from "./variants";

describe("Text", () => {
  it("should render h1 variant", () => {
    render(<Text variant="h1">Text</Text>);
    const text = screen.getByText("Text");

    expect(text).toHaveStyle(variants.h1);
  });

  it("should render body variant", () => {
    render(<Text variant="body">Text</Text>);
    const text = screen.getByText("Text");

    expect(text).toHaveStyle(variants.body);
  });
});
