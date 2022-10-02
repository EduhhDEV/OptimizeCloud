import React from "react";
import { Story, Meta } from "@storybook/react";

import { ButtonComponent } from "./Button";

export default {
  title: "Forms/Button",
  component: ButtonComponent,
  argTypes: {
    transparent: { control: 'boolean' },
    outline: { control: 'boolean' },
    variant: {
      options: ["primary", "success", "warning", "danger"],
      control: { type: "radio" },
      test: {
        options: ['Item One', 'Item Two', 'Item Three'],
        control: { type: 'select' },
      }
    },
  },
  args: {
    outline: true,
    transparent: false
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story = (args) => <ButtonComponent {...args}>LABEL</ButtonComponent>;
export const Primary = Template.bind({});
Primary.args = {
  variant: "primary"
};

