import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { Challenge2Component } from './challenge-2.component';

const component = new Challenge2Component();

const meta: Meta = {
  title: 'Challenges/Challenge 2',
  component: component.tagName,
  render: () => {
    return html`<challenge-2></challenge-2>`;
  },
};

export default meta;

export const Default = {};

export const DefaultWithTitle = {
  render: () => {
    return html`<challenge-2
      ><div slot="title">This is super informative</div></challenge-2
    >`;
  },
};

export const DefaultWithTitleAndMessage = {
  render: () => {
    return html`<challenge-2>
      <div slot="title">This is super informative</div>
      <div>You can tell by how pretty the alert is.</div>
    </challenge-2>`;
  },
};
