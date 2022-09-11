/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Select from "components/common/Select";

export default {
  title: "Components/Select",
  component: Select,
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "select",
  options: [
    { value: "", label: "Select field" },
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ],
};
