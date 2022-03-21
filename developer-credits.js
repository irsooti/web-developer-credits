/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let DeveloperCredits = class DeveloperCredits extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * The number of times the button has been clicked.
         */
        this.src = 'https://it.gravatar.com/userimage/106487817/5077ded82058d6fb54f259e822b2bce5.png';
    }
    render() {
        return html `
      <img src=${this.src} />
      <p>${this.sayCredits()}</p>
    `;
    }
    sayCredits() {
        return `Developed with ❤️ by Daniele Irsuti`;
    }
};
DeveloperCredits.styles = css `
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
__decorate([
    property({ type: String })
], DeveloperCredits.prototype, "src", void 0);
DeveloperCredits = __decorate([
    customElement('developer-credits')
], DeveloperCredits);
export { DeveloperCredits };
//# sourceMappingURL=developer-credits.js.map