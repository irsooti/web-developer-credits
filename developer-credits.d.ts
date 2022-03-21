/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
export declare class DeveloperCredits extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * The number of times the button has been clicked.
     */
    src: string;
    render(): import("lit-html").TemplateResult<1>;
    sayCredits(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'developer-credits': DeveloperCredits;
    }
}
//# sourceMappingURL=developer-credits.d.ts.map