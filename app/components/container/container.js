import React from "react";
import { View } from "react-native";
import styles from "./styles";
const Container = ({ childern }) => (
  <View style={styles.container}>{childern}</View>
);

export default Container;
