import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('challenge-5')
export class Challenge5Component extends LitElement {
  static override styles = [];

  @property({ type: String })
  name = 'John Doe';

  @property({ type: String })
  email = 'john.doe@example.com';

  @property({ type: Boolean }) isEditing = false;

  #updateName(e: InputEvent) {
    this.name = (e.target as HTMLInputElement).value;
  }

  #updateEmail(e: InputEvent) {
    this.email = (e.target as HTMLInputElement).value;
  }

  #onSave() {
    this.isEditing = false;

    this.dispatchEvent(
      new CustomEvent('save', {
        detail: {
          name: this.name,
          email: this.email,
        },
      }),
    );
  }

  #onEdit() {
    this.isEditing = true;
  }

  #editingRender() {
    return html`<div>
      <input type="text" .value=${this.name} @input=${this.#updateName} />
      <input type="email" .value=${this.email} @input=${this.#updateEmail} />
      <button @click=${this.#onSave}>Save</button>
    </div>`;
  }

  #nonEditingRender() {
    return html`<div>
      <p>${this.name}</p>
      <p>${this.email}</p>
      <button @click=${this.#onEdit}>Edit</button>
    </div>`;
  }

  override render() {
    return html`<div>
      ${this.isEditing ? this.#editingRender() : this.#nonEditingRender()}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'challenge-5': Challenge5Component;
  }
}
