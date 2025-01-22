import React from "react";
import { StyleSheet, View } from "react-native";

function Divider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#d6d6d6",
  },
});

export default React.memo(Divider);
