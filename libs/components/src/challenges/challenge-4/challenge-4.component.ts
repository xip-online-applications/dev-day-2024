import { html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { AlertVariant, styles } from './challenge-4.styles';

@customElement('challenge-4')
export class Challenge4Component extends LitElement {
  static override styles = [...styles];

  @property({ type: String, reflect: true })
  variant: AlertVariant = 'primary';

  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: Boolean, reflect: true })
  closable = false;

  hide() {
    this.open = false;

    this.dispatchEvent(new CustomEvent('close'));
  }

  show() {
    this.open = true;
  }

  #handleCloseClick() {
    this.hide();
  }

  #closeButtonRender() {
    return this.closable
      ? html`<div class="close-button">
          <button @click=${this.#handleCloseClick}>&#10005;</button>
        </div>`
      : nothing;
  }

  override render() {
    return html`<div
      part="base"
      class=${classMap({
        alert: true,
        'alert-open': this.open,
        'alert-closable': this.closable,
        [`alert-${this.variant}`]: true,
      })}
      aria-hidden=${this.open ? 'false' : 'true'}
    >
      <div class="message">
        <div class="title">
          <slot name="title"></slot>
        </div>
        <slot>Nothing fancy here, just a simple alert.</slot>
      </div>

      ${this.#closeButtonRender()}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'challenge-4': Challenge4Component;
  }
}
