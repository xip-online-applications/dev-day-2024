import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { Challenge3Component } from './challenge-3.component';
import { alertVariants } from './challenge-3.styles';

const component = new Challenge3Component();

const meta: Meta<Challenge3Component> = {
  title: 'Challenges/Challenge 3',
  component: component.tagName,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: alertVariants,
    },
  },
  args: {
    variant: 'primary',
  },
  render: (args: Challenge3Component) => {
    return html`<challenge-3 variant=${args.variant}>
      <div slot="title">This is super informative</div>
      <div>You can tell by how pretty the alert is.</div>
    </challenge-3>`;
  },
};

export default meta;

export const Default = {};

export const Success = {
  args: {
    variant: 'success',
  },
};

export const Neutral = {
  args: {
    variant: 'neutral',
  },
};

export const Warning = {
  args: {
    variant: 'warning',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
  },
};
