import "../lib/index";
import { ClockComponent } from "../lib/index";
import { beforeEach, describe, expect, it } from "vitest";
import { createWebComponent } from "./utils";

describe("wc-clock", () => {
  beforeEach(async () => {
    document.body.innerHTML = "";
  });
  it("add fixed Time default attribute ", async () => {
    createWebComponent({
      name: ClockComponent.tagName,
      attributes: { "fixed-time": "" },
    });
    const wc = document.querySelector(ClockComponent.tagName);
    expect(wc).not.toBeNull();

    expect(
      wc.getAttribute(ClockComponent.attributes["fixed-time"])
    ).not.toBeNull();
    expect(
      wc.getAttribute(ClockComponent.attributes["hours-labels"])
    ).toBeNull();
    expect(
      wc.getAttribute(ClockComponent.attributes["hours-ticks"])
    ).toBeNull();
    expect(
      wc.getAttribute(ClockComponent.attributes["minutes-ticks"])
    ).toBeNull();

    // test if default fixed time is 10:10:30
    expect(wc.fixedTime).toEqual([10, 10, 30]);
    [
      ["seconds", 180], // 30*6deg
      ["minutes", 60], // 10*6deg
      ["hours", 305], // 10*30deg + 10/2 deg
    ].map(([type, deg]) => {
      let hand = wc.shadowRoot.querySelector(`#wc-clock__clock-${type}-hand`);
      expect(hand).not.toBeNull();
      expect(hand.style.transform).toBe(`rotate(${deg}deg)`);
    });

    ["ticks", "labels"].map((type) => {
      let divType = wc.shadowRoot.querySelector(`#wc-clock__clock-${type}`);
      expect(divType).not.toBeNull();
      expect(divType.children.length).toEqual(0);
    });

    expect(wc.shadowRoot.innerHTML).toMatchSnapshot();
  });
  it("add a specific fixed Time   ", async () => {
    createWebComponent({
      name: ClockComponent.tagName,
      attributes: { "fixed-time": "5:25:55", "hours-ticks": "" },
    });
    // get the web component from the DOM
    const wc = document.querySelector(ClockComponent.tagName);
    expect(wc).not.toBeNull();

    // check its attributes
    expect(
      wc.getAttribute(ClockComponent.attributes["fixed-time"])
    ).not.toBeNull();
    expect(
      wc.getAttribute(ClockComponent.attributes["hours-labels"])
    ).toBeNull();
    expect(
      wc.getAttribute(ClockComponent.attributes["hours-ticks"])
    ).not.toBeNull();
    expect(
      wc.getAttribute(ClockComponent.attributes["minutes-ticks"])
    ).toBeNull();

    // test if  fixed time is 5:25:55
    expect(wc.fixedTime).toEqual([5, 25, 55]);
    [
      ["seconds", 330], // 55*6deg
      ["minutes", 150], // 10*6deg
      ["hours", 162.5], // 10*30deg + 10/2 deg
    ].map(([type, deg]) => {
      let hand = wc.shadowRoot.querySelector(`#wc-clock__clock-${type}-hand`);
      expect(hand).not.toBeNull();
      expect(hand.style.transform).toBe(`rotate(${deg}deg)`);
    });

    // test ticks & labels divs
    [
      ["ticks", 12],
      ["labels", 0],
    ].map(([type, nChild]) => {
      let divType = wc.shadowRoot.querySelector(`#wc-clock__clock-${type}`);
      expect(divType).not.toBeNull();
      expect(divType.children.length).toEqual(nChild);
    });

    // test clock minutes & hours ticks
    [
      ["hours", 12],
      ["minutes", 0],
    ].map(([type, n]) => {
      expect(wc.shadowRoot.querySelectorAll(`[id^=${type}-ticks]`).length).toBe(
        n
      );
    });

    // extract a snapshot
    expect(wc.shadowRoot.innerHTML).toMatchSnapshot();
  });
});
