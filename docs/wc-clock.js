var p = (e, n, r) => {
  if (!n.has(e))
    throw TypeError("Cannot " + r);
};
var _ = (e, n, r) => (p(e, n, "read from private field"), r ? r.call(e) : n.get(e)), d = (e, n, r) => {
  if (n.has(e))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(e) : n.set(e, r);
}, x = (e, n, r, c) => (p(e, n, "write to private field"), c ? c.call(e, r) : n.set(e, r), r);
var i = (e, n, r) => (p(e, n, "access private method"), r);
const R = `<style>\r
  :host {\r
    display: block;\r
    --hours-hand-color: #b9b9b9;\r
    --minutes-hand-color: #b9b9b9;\r
    --seconds-hand-color: #ff3434;\r
    --clock-background-color: #1a1a1aff;\r
    --clock-color: #fff;\r
    --clock-width: 10rem;\r
    --seconds-hand-width: 1;\r
    --seconds-hand-height: 4;\r
    --minutes-hand-width: 6;\r
    --minutes-hand-height: 4;\r
    --hours-hand-width: 6;\r
    --hours-hand-height: 3;\r
    --clock-font-size: 1rem;\r
    --clock-font: Arial, Helvetica, sans-serif;\r
    --clock-hours-ticks-color: #fff;\r
    --clock-minutes-ticks-color: #ffffff90;\r
    --clock-hours-ticks-height: 0.45rem;\r
    --clock-hours-ticks-width: 0.15rem;\r
    --clock-minutes-ticks-height: 0.23rem;\r
    --clock-minutes-ticks-width: 0.05rem;\r
  }\r
  .wc-clock__container {\r
    position: relative;\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    font-family: var(--clock-font-family);\r
    font-size: var(--clock-font-size);\r
  }\r
  .wc-clock__clock {\r
    width: var(--clock-width);\r
    height: var(--clock-width);\r
    background: var(--clock-background-color);\r
    border-radius: 50%;\r
    box-shadow: 0 0 0.25rem var(--clock-background-color),\r
      0 0 0.1em 0.2em #a9a9a9;\r
    border: 0.1em solid var(--clock-background-color);\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    .wc-clock__clock-labels {\r
      > span {\r
        position: absolute;\r
        color: var(--clock-color);\r
        transform: rotate(calc(30deg * var(--a)));\r
        inset: 0.5em;\r
        text-align: center;\r
        > b {\r
          display: flex;\r
          justify-content: center;\r
          transform: rotate(calc(-30deg * var(--a)));\r
        }\r
      }\r
    }\r
    .wc-clock__clock-ticks {\r
      > span {\r
        position: absolute;\r
        transform: rotate(calc(6deg * var(--ta)));\r
        text-align: center;\r
        inset: 0;\r
        display: flex;\r
        justify-content: center;\r
      }\r
      > span::before {\r
        content: "";\r
        width: var(--clock-tick-width);\r
        height: var(--clock-tick-height);\r
        border-radius: 0.1em;\r
        background-color: var(--clock-tick-color, var(--clock-color));\r
        align-self: flex-start;\r
      }\r
    }\r
  }\r
  .wc-clock__clock::before {\r
    position: absolute;\r
    content: "";\r
    background-color: #fff;\r
    width: 1.25rem;\r
    height: 1.25rem;\r
    border-radius: 50%;\r
  }\r
  .wc-clock__clock::after {\r
    position: absolute;\r
    content: "";\r
    background-color: #fff;\r
    box-shadow: 0 0 0 0.2rem var(--clock-background-color);\r
    width: 0.2rem;\r
    height: 0.2rem;\r
    border-radius: 50%;\r
    z-index: 2;\r
  }\r
\r
  .wc-clock__clock-hand {\r
    position: absolute;\r
    display: flex;\r
    justify-content: center;\r
    align-items: flex-end;\r
    width: 1rem;\r
    height: 1rem;\r
    transform: rotate(360deg);\r
    z-index: 1;\r
    > i {\r
      position: absolute;\r
      width: calc(0.05em * var(--width));\r
      height: calc(1em * var(--height));\r
      background: var(--color);\r
      border-radius: 100% 100% 50% 50%;\r
      display: flex;\r
      justify-content: center;\r
    }\r
    > i::before {\r
      content: "";\r
      position: absolute;\r
      width: calc(0.05em * var(--width) + 0.1em);\r
      height: calc(0.05em * var(--height) + 0.5em);\r
      background: var(--color);\r
      border-radius: 100% 100% 50% 50%;\r
      transform: translate(0, 0.25em);\r
    }\r
    > i::after {\r
      content: "";\r
      position: absolute;\r
      width: calc(0.05em * var(--width));\r
      height: calc(0.1em * var(--height));\r
      background: var(--color);\r
      border-radius: 1rem 1rem 0.5rem 0.5rem;\r
      top: 100%;\r
    }\r
  }\r
</style>\r
<div id="wc-clock__container" class="wc-clock__container">\r
  <div id="wc-clock__clock" class="wc-clock__clock">\r
    <div id="wc-clock__clock-minutes-hand" class="wc-clock__clock-hand">\r
      <i\r
        style="\r
          --color: var(--minutes-hand-color);\r
          --width: var(--minutes-hand-width);\r
          --height: var(--minutes-hand-height);\r
        "\r
      ></i>\r
    </div>\r
    <div id="wc-clock__clock-hours-hand" class="wc-clock__clock-hand">\r
      <i\r
        style="\r
          --color: var(--hours-hand-color);\r
          --width: var(--hours-hand-width);\r
          --height: var(--hours-hand-height);\r
        "\r
      ></i>\r
    </div>\r
    <div id="wc-clock__clock-seconds-hand" class="wc-clock__clock-hand">\r
      <i\r
        style="\r
          --color: var(--seconds-hand-color);\r
          --width: var(--seconds-hand-width);\r
          --height: var(--seconds-hand-height);\r
        "\r
      ></i>\r
    </div>\r
\r
    <div class="wc-clock__clock-labels" id="wc-clock__clock-labels"></div>\r
    <div class="wc-clock__clock-ticks" id="wc-clock__clock-ticks"></div>\r
  </div>\r
</div>\r
`, h = {
  get componentName() {
    return "wc-clock";
  },
  get componentAttributes() {
    return {
      "minutes-ticks": "minutes-ticks",
      "hours-ticks": "hours-ticks",
      "time-zone": "time-zone",
      "fixed-time": "fixed-time",
      "hours-labels": "hours-labels"
    };
  },
  get componentTemplate() {
    const e = document.createElement("template");
    return e.innerHTML = R, e;
  },
  get hoursLabels() {
    return Array.from({ length: 12 }, (e, n) => n + 1);
  },
  get fixedTime() {
    return [10, 10, 30];
  },
  get timeZone() {
    return "Europe/Paris";
  }
};
var k, m, f, u, g, w, L, b, y;
const l = class l extends HTMLElement {
  constructor() {
    super();
    d(this, m);
    d(this, u);
    d(this, w);
    d(this, b);
    d(this, k, void 0);
    this.attachShadow({ mode: "open" });
    const r = h.componentTemplate.content.cloneNode(!0);
    this.shadowRoot.append(r), this.hoursLabels = h.hoursLabels;
  }
  static get tagName() {
    return h.componentName;
  }
  static get attributes() {
    return h.componentAttributes;
  }
  static get observedAttributes() {
    return Object.values(l.attributes);
  }
  connectedCallback() {
    i(this, m, f).call(this);
  }
  disconnectedCallback() {
    clearInterval(_(this, k));
  }
  attributeChangedCallback(r, c, t) {
    switch (r) {
      case l.attributes["hours-labels"]:
        this.hoursLabels = t === "" ? h.hoursLabels : t ? t.split(",") : [], i(this, w, L).call(this);
        break;
      case l.attributes["minutes-ticks"]:
        i(this, b, y).call(this, t === "" ? Array.from({ length: 60 }, (o, s) => {
          if (s % 5 != 0)
            return s;
        }).filter(Number) : [], !1);
        break;
      case l.attributes["hours-ticks"]:
        i(this, b, y).call(this, t === "" ? Array.from({ length: 12 }, (o, s) => s * 5) : []);
        break;
      case l.attributes["time-zone"]:
        this.timeZone = Intl.supportedValuesOf("timeZone").includes(t) ? t : h.timeZone, i(this, m, f).call(this);
        break;
      case l.attributes["fixed-time"]:
        this.fixedTime = t === "" ? h.fixedTime : t && t.split(":").map(Number) || null, i(this, m, f).call(this);
        break;
    }
  }
};
k = new WeakMap(), m = new WeakSet(), f = function() {
  clearInterval(_(this, k));
  const r = this.shadowRoot.getElementById(
    "wc-clock__clock-hours-hand"
  ), c = this.shadowRoot.getElementById(
    "wc-clock__clock-minutes-hand"
  ), t = this.shadowRoot.getElementById(
    "wc-clock__clock-seconds-hand"
  );
  if (this.fixedTime) {
    let o = /* @__PURE__ */ new Date();
    o.setHours(...this.fixedTime), i(this, u, g).call(this, { date: o, hourHand: r, minuteHand: c, secondHand: t });
  } else {
    let o = new Date(
      (/* @__PURE__ */ new Date()).toLocaleString("en", { timeZone: this.timeZone })
    );
    i(this, u, g).call(this, { date: o, hourHand: r, minuteHand: c, secondHand: t }), x(this, k, setInterval(() => {
      o = new Date(
        (/* @__PURE__ */ new Date()).toLocaleString("en", { timeZone: this.timeZone })
      ), i(this, u, g).call(this, { date: o, hourHand: r, minuteHand: c, secondHand: t });
    }, 1e3));
  }
}, u = new WeakSet(), g = function({ date: r, hourHand: c, minuteHand: t, secondHand: o }) {
  let s = r.getHours(), a = r.getMinutes(), T = r.getSeconds(), E = 6 * a, I = 6 * T, $ = 30 * s + a / 2;
  c.style.transform = `rotate(${$}deg)`, t.style.transform = `rotate(${E}deg)`, o.style.transform = `rotate(${I}deg)`;
}, w = new WeakSet(), L = function() {
  const r = this.shadowRoot.getElementById("wc-clock__clock-labels");
  let c = 12 / this.hoursLabels.length ^ 0;
  r.replaceChildren(
    ...this.hoursLabels.map((t, o) => {
      let s = document.createElement("span");
      return s.innerHTML = `<b>${t}</b>`, s.style.setProperty("--a", (o + 1) * c), s;
    })
  );
}, b = new WeakSet(), y = function(r, c = !0) {
  const t = this.shadowRoot.getElementById("wc-clock__clock-ticks");
  let o = t.querySelectorAll(
    `[id^=${c ? "minutes" : "hours"}-ticks]`
  );
  t.replaceChildren(
    ...r.map((s) => {
      let a = document.createElement("span");
      return a.id = `${c ? "hours" : "minutes"}-ticks-${s}`, a.style.setProperty("--ta", s), a.style.setProperty(
        "--clock-tick-color",
        `var( --clock-${c ? "hours" : "minutes"}-ticks-color)`
      ), a.style.setProperty(
        "--clock-tick-width",
        `var(--clock-${c ? "hours" : "minutes"}-ticks-width)`
      ), a.style.setProperty(
        "--clock-tick-height",
        `var(--clock-${c ? "hours" : "minutes"}-ticks-height)`
      ), a;
    }),
    ...o
  );
};
let v = l;
customElements.define(v.tagName, v);
export {
  v as ClockComponent
};
