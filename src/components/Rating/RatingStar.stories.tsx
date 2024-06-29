import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import RatingStar from './RatingStar';

const meta: Meta<typeof RatingStar> = {
    title: 'Components/RatingStar',
    component: RatingStar,
    tags: ['autodocs'],
    args: {
        isSelected: false,
        starIndex: 0,
        onStarHover: fn(),
        onStarLeave: fn(),
        onStarSelect: fn(),
    }
};

export default meta;

type Story = StoryObj<typeof RatingStar>;

export const Default: Story = {
};

export const Selected: Story = {
    args: {
        isSelected: true,
    },
};