import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Chat from ".";

export default {
  title: "Kits/Chat",
  component: Chat,
} as ComponentMeta<typeof Chat>;

export const Default: ComponentStory<typeof Chat> = ({ size }) => {
  return <Chat size={size} />;
};
