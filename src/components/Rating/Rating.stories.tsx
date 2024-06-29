import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Rating from './Rating';

const meta: Meta<typeof Rating> = {
    title: 'Components/Rating',
    component: Rating,
    tags: ['autodocs'],
    args: {
        maxRating: 5,
        rating: undefined,
        onRatingUpdated: fn(),
    }
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const Default: Story = {
};
