import type { Meta, StoryObj } from '@storybook/react';
import ArrowButton from './ArrowButton';

const meta: Meta<typeof ArrowButton> = {
  title: 'Components/ImageSlider/ArrowButton',
  component: ArrowButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};
    
export default meta;

type Story = StoryObj<typeof ArrowButton>;

export const PrevButton: Story = {
    args: {
        buttonType: "prev",
    },
};

export const NextButton: Story = {
    args: {
        buttonType: "next",
    },
};