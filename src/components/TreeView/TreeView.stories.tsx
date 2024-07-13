import type { Meta, StoryObj } from '@storybook/react';
import TreeView from './TreeView';

const items = [{
    label: "Home",
    path: "#",
}, {
    label: "Account",
    path: "#account",
    children: [
        {
            label: "Order History",
            path: "#orders",
        },
        {
            label: "Profile",
            path: "#profile",
        }
    ]
}]

const meta: Meta<typeof TreeView> = {
    title: 'Components/TreeView',
    component: TreeView,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TreeView>;

export const Default: Story = {
    args: {
        label: "Default Tree View",
        items,
    }
};