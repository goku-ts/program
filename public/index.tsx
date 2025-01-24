import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import Buttons from "@/components/ui/Buttons";
import { SCREEN } from "@/constants/Colors";

export default function index() {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: SCREEN.width * 1, height: 100 }}
        source={require("../assets/images/1.png")}
      />
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#FFC764" }}>Home</Text>
      </TouchableOpacity>

      {/* <Image
        style={{ width: SCREEN.width * 1, height: 100 }}
        source={require("../assets/images/2.png")}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    margin: 20,
    height: SCREEN.height * 0.08,
    width: SCREEN.width * 0.8,
    backgroundColor: "#FFC764",
  },
  buttonText: {
    fontSize: 26,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },
});
