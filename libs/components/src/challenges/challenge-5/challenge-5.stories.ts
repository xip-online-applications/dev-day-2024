import { useArgs } from '@storybook/preview-api';
import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { Challenge5Component } from './challenge-5.component';

const component = new Challenge5Component();

const meta: Meta<Challenge5Component> = {
  title: 'Challenges/Challenge 5',
  component: component.tagName,
  argTypes: {
    name: {
      control: {
        type: 'text',
      },
    },
    email: {
      control: {
        type: 'text',
      },
    },
    isEditing: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    isEditing: false,
  },
  render: (args: Challenge5Component) => {
    const [{ isEditing }, updateArgs] = useArgs();

    const onSave = (e: CustomEvent) => {
      updateArgs({ ...args, ...e.detail });
    };

    return html`<challenge-5
      name=${args.name}
      email=${args.email}
      ?isEditing=${isEditing}
      @save=${onSave}
    ></challenge-5>`;
  },
};

export default meta;

export const Default = {};
