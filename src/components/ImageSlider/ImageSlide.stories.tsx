import type { Meta, StoryObj } from '@storybook/react';
import ImageSlider from './ImageSlider';

const items = [
    {
        url: "/images/hans-jurgen-mager-KgRKlQXmHR0-unsplash.jpg",
        description: "A polar bear",
    }, {
        url: "/images/marius-masalar-LN_gdbQtzvk-unsplash.jpg",
        description: "A python.",
    }, {
        url: "/images/hans-veth-ltEraYc7QrU-unsplash.jpg",
        description: "A wolf."
    }, {
        url: "/images/dylan-leagh-UG3L8WAQLBs-unsplash.jpg",
        description: "A bull."
    }
];

const meta: Meta<typeof ImageSlider> = {
    title: 'Components/ImageSlider',
    component: ImageSlider,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <div className="w-[320px] md:w-[640px]">
                <Story />
            </div>
        )
    ],
};
    
export default meta;

type Story = StoryObj<typeof ImageSlider>;

export const Default: Story = {
    args: {
        items,
        label: "Image slider demo.",
    }
};