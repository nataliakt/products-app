import { StyleSheet, View } from "react-native";
import { Text } from "../../ds";
import React from "react";

type LoadingTemplateProps = {
  title?: string;
};

function LoadingTemplate({ title }: LoadingTemplateProps) {
  return (
    <View style={styles.container}>
      <Text variant="body">{title || "Loading..."}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default React.memo(LoadingTemplate);
