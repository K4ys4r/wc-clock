import "../lib/index";
import { ClockComponent } from "../lib/index";
import { beforeEach, describe, expect, it } from "vitest";
import { createWebComponent } from "./utils";

describe("wc-clock", () => {
  beforeEach(async () => {
    document.body.innerHTML = "";
  });
  it("add default wc-clock to the DOM ", async () => {
    createWebComponent({
      name: ClockComponent.tagName,
      attributes: {},
    });
    // get the web component from the DOM
    const wc = document.querySelector(ClockComponent.tagName);

    // check its attributes
    expect(wc).not.toBeNull();
    expect(wc.outerHTML).toBe("<wc-clock></wc-clock>");

    expect(wc.getAttribute(ClockComponent.attributes["fixed-time"])).toBeNull();
    expect(
      wc.getAttribute(ClockComponent.attributes["hours-labels"])
    ).toBeNull();
    expect(
      wc.getAttribute(ClockComponent.attributes["hours-ticks"])
    ).toBeNull();
    expect(
      wc.getAttribute(ClockComponent.attributes["minutes-ticks"])
    ).toBeNull();

    // check clock hands
    ["seconds", "minutes", "hours"].map((type) => {
      let hand = wc.shadowRoot.querySelector(`#wc-clock__clock-${type}-hand`);
      expect(hand).not.toBeNull();
    });

    // test ticks & labels divs
    ["ticks", "labels"].map((type) => {
      let divType = wc.shadowRoot.querySelector(`#wc-clock__clock-${type}`);
      expect(divType).not.toBeNull();
      expect(divType.children.length).toEqual(0);
    });

    // extract a snapshot
    // expect(wc.shadowRoot.innerHTML).toMatchSnapshot();
  });
});
