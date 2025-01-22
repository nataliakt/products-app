import { StyleSheet, TouchableOpacity, View } from "react-native";
import Text from "../Text";
import React from "react";
import { variants, sizes } from "./variants";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type FontAwesomeName = keyof typeof FontAwesome.glyphMap;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

type ButtonProps = {
  title?: string;
  variant?: Variant;
  size?: Size;
  onPress?: () => void;
  icon?: FontAwesomeName;
};

function Button({
  title,
  variant = "primary",
  size = "medium",
  onPress,
  icon,
}: ButtonProps) {
  const styles = makeStyles(variant, size);

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {title ? (
        <Text variant="body" style={styles.text}>
          {title}
        </Text>
      ) : null}
      {icon ? (
        <View>
          <FontAwesome name={icon} size={16} style={styles.text} />
        </View>
      ) : null}
    </TouchableOpacity>
  );
}

const makeStyles = (variant: Variant, size: Size) =>
  StyleSheet.create({
    button: {
      ...variants[variant].button,
      ...sizes[size].button,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 4,
      borderRadius: 8,
    },
    text: {
      ...variants[variant].text,
      ...sizes[size].text,
    },
  });

export default React.memo(Button);
