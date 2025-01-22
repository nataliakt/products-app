import React from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import Text from "../Text";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type SelectProps = {
  label: string;
  checked: boolean;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

function Select({ label, checked, onPress, style }: SelectProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.select, style]}>
      <Text variant="body">{label}</Text>
      <View style={styles.box}>
        {checked ? <FontAwesome name="check" size={16} color="black" /> : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  select: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  box: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#919191",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default React.memo(Select);
