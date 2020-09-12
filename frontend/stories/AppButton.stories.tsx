import React from "react";
import { AppButton, IButtonProps } from "../components/UI/Button";
import { Story } from "@storybook/react/types-6-0";

import { MdSettings } from "react-icons/md";

export default {
  title: "App/Button",
  component: AppButton,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    iconColor: { control: "color" },
  },
};

const Template: Story<IButtonProps> = (args) => <AppButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <span>Button</span>,
};

export const Large = Template.bind({});
Large.args = {
  children: "Button",
  size: "large",
};

export const TitleAndIcon = Template.bind({});
TitleAndIcon.args = {
  children: "Button",
  size: "large",
  icon: <MdSettings />,
  iconColor: "#eee",
};

export const Icon = Template.bind({});
Icon.args = {
  icon: <MdSettings />,
  iconColor: "#323232",
};
