import React from "react";
import { Button } from "../ds";
import { router } from "expo-router";

function HeaderOptionsButton() {
  const onPress = () => {
    router.push("/categories/modal");
  };

  return (
    <Button
      title="Filter / Sort"
      onPress={onPress}
      size="small"
      rightIcon="filter"
    />
  );
}

export default React.memo(HeaderOptionsButton);
