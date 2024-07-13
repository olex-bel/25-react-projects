import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import RatingStar from './RatingStar';

const meta: Meta<typeof RatingStar> = {
    title: 'Components/RatingStar',
    component: RatingStar,
    tags: ['autodocs'],
    args: {
        selectedStarIndex: 0,
        starIndex: 1,
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
        selectedStarIndex: 1,
        starIndex: 1,
    },
};