/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import TextField from "components/common/TextField";

export default {
  title: "Components/TextField",
  component: TextField,
};

const Template = (args) => <TextField {...args} />;

export const WithLabel = Template.bind({});
WithLabel.args = {
  id: "text-field-with-label",
  label: "Input Label",
  placeholder: "Input Placeholder",
  type: "text",
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  id: "text-field-without-label",
  placeholder: "Input Placeholder",
  type: "text",
};

export const WithPrepend = Template.bind({});
WithPrepend.args = {
  id: "text-field-with-prepend",
  placeholder: "Input Placeholder",
  type: "text",
  prepend: "%",
};
