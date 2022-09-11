/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import TextArea from "components/common/TextArea";

export default {
  title: "Components/TextArea",
  component: TextArea,
};

const Template = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "text-area",
  placeholder: "Input Placeholder",
  type: "text-area",
  rows: 3,
  maxLength: 200,
};
