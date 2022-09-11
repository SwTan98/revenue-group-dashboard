/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import IconButton from "components/common/IconButton.js";

export default {
  title: "Components/IconButton",
  component: IconButton,
};

const Template = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  icon: "/icons/add_circle_outline.svg",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  icon: "/icons/delete.svg",
};
