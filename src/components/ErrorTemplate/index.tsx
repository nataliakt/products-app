import { StyleSheet, View } from "react-native";
import { Button, Text } from "../ds";
import React from "react";
import { DEFAULT_ERROR_MESSAGE } from "@/src/constants/error";

type ErrorTemplateProps = {
  title?: string;
  button?: string;
  reload: VoidFunction;
};

function ErrorTemplate({ title, button, reload }: ErrorTemplateProps) {
  return (
    <View style={styles.container}>
      <Text variant="body">{title || DEFAULT_ERROR_MESSAGE}</Text>
      <Button
        title={button || "Reload"}
        variant="secondary"
        size="large"
        icon="refresh"
        onPress={reload}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
});

export default React.memo(ErrorTemplate);
