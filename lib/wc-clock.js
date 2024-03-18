import { defaultSettings } from "../utils/index.js";

export class ClockComponent extends HTMLElement {
  #interval;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const temp = defaultSettings.componentTemplate.content.cloneNode(true);
    this.shadowRoot.append(temp);
    this.hoursLabels = defaultSettings.hoursLabels;
  }
  static get tagName() {
    return defaultSettings.componentName;
  }
  static get attributes() {
    return defaultSettings.componentAttributes;
  }
  static get observedAttributes() {
    return Object.values(ClockComponent.attributes);
  }
  connectedCallback() {
    this.#render();
  }

  disconnectedCallback() {
    clearInterval(this.#interval);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case ClockComponent.attributes["hours-labels"]:
        this.hoursLabels =
          newValue === ""
            ? defaultSettings.hoursLabels
            : newValue
            ? newValue.split(",")
            : [];
        this.#setHoursLabels();
        break;
      case ClockComponent.attributes["minutes-ticks"]:
        this.#setTicks(
          newValue === ""
            ? Array.from({ length: 60 }, (_, i) => {
                if (i % 5 != 0) return i;
              }).filter(Number)
            : [],
          false
        );
        break;
      case ClockComponent.attributes["hours-ticks"]:
        this.#setTicks(
          newValue === "" ? Array.from({ length: 12 }, (_, i) => i * 5) : []
        );
        break;
      case ClockComponent.attributes["time-zone"]:
        this.timeZone = Intl.supportedValuesOf("timeZone").includes(newValue)
          ? newValue
          : defaultSettings.timeZone;
        this.#render();
        break;
      case ClockComponent.attributes["fixed-time"]:
        this.fixedTime =
          newValue === ""
            ? defaultSettings.fixedTime
            : newValue
            ? newValue.split(":").map(Number) || null
            : null;
        this.#render();
        break;
    }
  }

  #render() {
    clearInterval(this.#interval);
    const hourHand = this.shadowRoot.getElementById(
      "wc-clock__clock-hours-hand"
    );
    const minuteHand = this.shadowRoot.getElementById(
      "wc-clock__clock-minutes-hand"
    );
    const secondHand = this.shadowRoot.getElementById(
      "wc-clock__clock-seconds-hand"
    );
    if (!this.fixedTime) {
      let date = new Date(
        new Date().toLocaleString("en", { timeZone: this.timeZone })
      );

      this.#updateClock({ date, hourHand, minuteHand, secondHand });
      this.#interval = setInterval(() => {
        date = new Date(
          new Date().toLocaleString("en", { timeZone: this.timeZone })
        );
        this.#updateClock({ date, hourHand, minuteHand, secondHand });
      }, 1000);
    } else {
      let date = new Date();
      date.setHours(...this.fixedTime);
      this.#updateClock({ date, hourHand, minuteHand, secondHand });
    }
  }

  #updateClock({ date, hourHand, minuteHand, secondHand }) {
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let minuteRotate = 6 * mm; // 6deg/min
    let secondRotate = 6 * ss; // 6deg/min
    let hourRotate = 30 * hh + mm / 2; // 30deg/h + 30deg/60min
    hourHand.style.transform = `rotate(${hourRotate}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotate}deg)`;
    secondHand.style.transform = `rotate(${secondRotate}deg)`;
  }

  #setHoursLabels() {
    const symbolsDiv = this.shadowRoot.getElementById("wc-clock__clock-labels");

    // symbolsIndex determine the position of label on the clock based on the length of hoursLabels
    let symbolsIndex = (12 / this.hoursLabels.length) ^ 0;

    // update symbolsDiv elements
    symbolsDiv.replaceChildren(
      ...this.hoursLabels.map((s, i) => {
        let span = document.createElement("span");
        span.innerHTML = `<b>${s}</b>`;
        span.style.setProperty("--a", (i + 1) * symbolsIndex);
        return span;
      })
    );
  }

  #setTicks(numbers, isHours = true) {
    const ticksDiv = this.shadowRoot.getElementById("wc-clock__clock-ticks");

    // get the existing ticks to not delete them
    let oldNodes = ticksDiv.querySelectorAll(
      `[id^=${isHours ? "minutes" : "hours"}-ticks]`
    );

    // update ticksDiv elements
    ticksDiv.replaceChildren(
      ...numbers.map((i) => {
        let span = document.createElement("span");
        span.id = `${isHours ? "hours" : "minutes"}-ticks-${i}`;
        span.style.setProperty("--ta", i);
        span.style.setProperty(
          "--clock-tick-color",
          `var( --clock-${isHours ? "hours" : "minutes"}-ticks-color)`
        );
        span.style.setProperty(
          "--clock-tick-width",
          `var(--clock-${isHours ? "hours" : "minutes"}-ticks-width)`
        );
        span.style.setProperty(
          "--clock-tick-height",
          `var(--clock-${isHours ? "hours" : "minutes"}-ticks-height)`
        );
        return span;
      }),
      ...oldNodes
    );
  }
}
