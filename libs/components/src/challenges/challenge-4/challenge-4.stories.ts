import { useArgs } from '@storybook/preview-api';
import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { Challenge4Component } from './challenge-4.component';
import { alertVariants } from './challenge-4.styles';

const component = new Challenge4Component();

const meta: Meta<Challenge4Component> = {
  title: 'Challenges/Challenge 4',
  component: component.tagName,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: alertVariants,
    },
    open: {
      control: {
        type: 'boolean',
      },
    },
    closable: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    variant: 'primary',
    open: true,
    closable: false,
  },
  render: (args: Challenge4Component) => {
    const [{ open }, updateArgs] = useArgs();

    const onAlertClose = () => {
      updateArgs({ ...args, open: false });

      setTimeout(() => {
        updateArgs({ ...args, open: true });
      }, 2000);
    };

    return html`<challenge-4
      variant=${args.variant}
      ?open=${open}
      ?closable=${args.closable}
      @close=${onAlertClose}
    >
      <div slot="title">This is super informative</div>
      <div>You can tell by how pretty the alert is.</div>
    </challenge-4>`;
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
