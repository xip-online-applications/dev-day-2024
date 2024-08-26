import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { Challenge1Component } from './challenge-1.component';

const component = new Challenge1Component();

const meta: Meta = {
  title: 'Challenges/Challenge 1',
  component: component.tagName,
  render() {
    return html`<challenge-1></challenge-1>`;
  },
};

export default meta;

export const Default = {};
