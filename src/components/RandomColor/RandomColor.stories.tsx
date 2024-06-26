import type { Meta, StoryObj } from '@storybook/react';
import RandomColor from './RandomColor';

const meta: Meta<typeof RandomColor> = {
    title: 'Components/RandomColor',
    component: RandomColor,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RandomColor>;

export const Default: Story = {
};