import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './challenge-2.styles';

@customElement('challenge-2')
export class Challenge2Component extends LitElement {
  static override styles = [...styles];

  override render() {
    return html`<div part="base" class="alert">
      <div class="title">
        <slot name="title"></slot>
      </div>
      <slot>Nothing fancy here, just a simple alert.</slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'challenge-2': Challenge2Component;
  }
}
