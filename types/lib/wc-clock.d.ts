export class ClockComponent extends HTMLElement {
    static get tagName(): string;
    static get attributes(): {
        "minutes-ticks": string;
        "hours-ticks": string;
        "time-zone": string;
        "fixed-time": string;
        "hours-labels": string;
    };
    static get observedAttributes(): any;
    hoursLabels: any;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    timeZone: any;
    fixedTime: any;
    #private;
}
//# sourceMappingURL=wc-clock.d.ts.map