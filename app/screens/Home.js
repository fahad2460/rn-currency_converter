import React from "react";
import { StatusBar } from "react-native";
import { Container } from "../components/container";
import { Logo } from "../components/Logo";
export default () => (
  <Container>
    <StatusBar translucent={false} />
    <Logo />
  </Container>
);
