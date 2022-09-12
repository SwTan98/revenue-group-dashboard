/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Checkbox from "components/common/Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "checkbox",
  label: "Checkbox",
  value: "checkbox-value",
};
