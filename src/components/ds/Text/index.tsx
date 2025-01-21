import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from "react-native";
import { variants } from "./variants";

type Variant = keyof typeof variants;

export type TextProps = RNTextProps & {
  variant: keyof typeof variants;
};

export default function Text({ variant, style, ...props }: TextProps) {
  const styles = makeStyles(variant);
  return <RNText style={[style, styles.text]} {...props} />;
}

const makeStyles = (variant: Variant) =>
  StyleSheet.create({
    text: {
      ...variants[variant],
    },
  });
