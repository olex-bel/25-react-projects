import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';


const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};
    
export default meta;

type Story = StoryObj<typeof Accordion>;

const items = [
  {
    itemId: 'first-item',
    header: 'The first item',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    itemId: 'second-item',
    header: 'The second item',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    itemId: 'third-item',
    header: 'The third item',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  },
];

const Template: Story = {
  render: (args) => (
    <Accordion {...args} />
  ),
};

export const Default: Story = {
  ...Template,
  args: {
    isMultiSelectionEnabled: false,
    children: (
      <>
        {items.map((item) => (
          <Accordion.Item key={item.itemId} itemId={item.itemId}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Content>{item.content}</Accordion.Content>
          </Accordion.Item>
        ))}
      </>
    )
  }, 
};
