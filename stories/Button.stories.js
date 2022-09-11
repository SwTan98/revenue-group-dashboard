/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Button from "components/common/Button.js";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  label: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  label: "Secondary Button",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: "tertiary",
  label: "Tertiary Button",
};

export const Rounded = Template.bind({});
Rounded.args = {
  variant: "secondary",
  rounded: true,
  label: "Rounded Button",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  variant: "secondary",
  rounded: true,
  label: "With Icon",
  icon: "/icons/add.svg",
};
