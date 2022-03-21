/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('developer-credits')
export class DeveloperCredits extends LitElement {
  static override styles = css`
    :host {
      justify-content: center;
      display: flex;
      flex-direction: row;
      align-items: center;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }

    img {
      border-radius: 50%;
      margin-right: 25px;
    }
  `;

  /**
   * The number of times the button has been clicked.
   */
  @property({type: String})
  src =
    'https://it.gravatar.com/userimage/106487817/5077ded82058d6fb54f259e822b2bce5.png';

  override render() {
    return html`
      <img src=${this.src} />
      <p>${this.sayCredits()}</p>
    `;
  }

  sayCredits(): string {
    return `Developed with ❤️ by Daniele Irsuti`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'developer-credits': DeveloperCredits;
  }
}
