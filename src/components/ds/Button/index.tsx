import { StyleSheet, TouchableOpacity, View } from "react-native";
import Text from "../Text";
import React from "react";
import { variants, sizes } from "./variants";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type FontAwesomeName = keyof typeof FontAwesome.glyphMap;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

type ButtonProps = {
  title: string;
  variant?: Variant;
  size?: Size;
  onPress?: () => void;
  rightIcon?: FontAwesomeName;
};

function Button({
  title,
  variant = "primary",
  size = "medium",
  onPress,
  rightIcon,
}: ButtonProps) {
  const styles = makeStyles(variant, size);

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text variant="body" style={styles.text}>
        {title}
      </Text>
      {rightIcon ? (
        <View>
          <FontAwesome name={rightIcon} size={16} style={styles.text} />
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
