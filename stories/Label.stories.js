/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Label from "components/common/Label";

export default {
  title: "Components/Label",
  component: Label,
};

const Template = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Label",
};
