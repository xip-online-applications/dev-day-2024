import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { AlertVariant, styles } from './challenge-3.styles';

@customElement('challenge-3')
export class Challenge3Component extends LitElement {
  static override styles = [...styles];

  @property({ type: String, reflect: true })
  variant: AlertVariant = 'primary';

  override render() {
    return html`<div
      part="base"
      class="${classMap({
        alert: true,
        [`alert-${this.variant}`]: true,
      })}"
    >
      <div class="title">
        <slot name="title"></slot>
      </div>
      <slot>Nothing fancy here, just a simple alert.</slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'challenge-3': Challenge3Component;
  }
}
