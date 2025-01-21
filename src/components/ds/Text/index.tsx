import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from "react-native";
import { variants } from "./variants";
import React from "react";

type Variant = keyof typeof variants;

export type TextProps = RNTextProps & {
  variant: keyof typeof variants;
};

function Text({ variant, style, ...props }: TextProps) {
  const styles = makeStyles(variant);
  return <RNText style={[style, styles.text]} {...props} />;
}

const makeStyles = (variant: Variant) =>
  StyleSheet.create({
    text: {
      ...variants[variant],
    },
  });

export default React.memo(Text);
