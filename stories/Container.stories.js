/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Container from "components/common/Container";

export default {
  title: "Components/Container",
  component: Container,
};

const Template = (args) => <Container {...args}>Container children</Container>;

export const Default = Template.bind({});
Default.args = {};

export const Dotted = Template.bind({});
Dotted.args = {
  variant: "secondary",
};
