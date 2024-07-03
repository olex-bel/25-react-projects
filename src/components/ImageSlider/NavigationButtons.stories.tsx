import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import NavigationButtons from "./NavigationButtons";

const meta: Meta<typeof NavigationButtons> = {
    title: 'Components/ImageSlider/NavigationButtons',
    component: NavigationButtons,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type Story = StoryObj<typeof NavigationButtons>;

const slides = [
    { description: "slide 1" },
    { description: "slide 2" },
    { description: "slide 2" },
    { description: "slide 3" },
    { description: "slide 4" },
    { description: "slide 5" }
];

export const Default: Story = {
    args: {
        slides,
        activeSlideIndex: 2,
        onSelectSlide: fn(),
    }
};

    