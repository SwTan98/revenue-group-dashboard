/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Table from "components/common/Table";

export default {
  title: "Components/Table",
  component: Table,
};

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  maxWidth: 300,
  maxHeight: 200,
  columns: [
    {
      id: "col1",
      label: "Column 1",
    },
    {
      id: "col2",
      label: "Column 2",
      sortable: true,
    },
    {
      id: "col3",
      label: "Column 3",
    },
    {
      id: "col4",
      label: "Column 4",
    },
    {
      id: "col5",
      label: "Column 5",
    },
  ],
  data: [
    {
      col1: "Data 1",
      col2: "Data 2",
      col3: "Data 3",
      col4: "Data 4",
      col5: "Data 5",
    },
    {
      col1: "Data 1",
      col2: "Data 2",
      col3: "Data 3",
      col4: "Data 4",
      col5: "Data 5",
    },
    {
      col1: "Data 1",
      col2: "Data 2",
      col3: "Data 3",
      col4: "Data 4",
      col5: "Data 5",
    },
    {
      col1: "Data 1",
      col2: "Data 2",
      col3: "Data 3",
      col4: "Data 4",
      col5: "Data 5",
    },
    {
      col1: "Data 1",
      col2: "Data 2",
      col3: "Data 3",
      col4: "Data 4",
      col5: "Data 5",
    },
  ],
};
