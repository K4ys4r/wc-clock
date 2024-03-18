import "../lib/index";
import { ClockComponent } from "../lib/index";
import { beforeEach, describe, expect, it } from "vitest";
import { createWebComponent } from "./utils";

describe("wc-clock", () => {
  beforeEach(async () => {
    document.body.innerHTML = "";
  });
  it("add attributes & check their default values", () => {
    createWebComponent({
      name: ClockComponent.tagName,
      attributes: {
        "hours-ticks": "",
        "minutes-ticks": "",
        "hours-labels": "",
        "time-zone": "",
      },
    });
    // get the web component from the DOM
    const wc = document.querySelector(ClockComponent.tagName);

    // check its attributes
    expect(
      wc.getAttribute(ClockComponent.attributes["hours-ticks"])
    ).not.toBeNull();
    expect(
      wc.getAttribute(ClockComponent.attributes["minutes-ticks"])
    ).not.toBeNull();
    expect(
      wc.getAttribute(ClockComponent.attributes["hours-labels"])
    ).not.toBeNull();
    expect(
      wc.getAttribute(ClockComponent.attributes["time-zone"])
    ).not.toBeNull();

    // test default labels & timeZone
    expect(wc.hoursLabels).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    expect(wc.timeZone).toEqual("Europe/Paris");

    // test ticks & labels divs
    [
      ["ticks", 60],
      ["labels", 12],
    ].map(([type, nChild]) => {
      let divType = wc.shadowRoot.querySelector(`#wc-clock__clock-${type}`);
      expect(divType).not.toBeNull();
      expect(divType.children.length).toEqual(nChild);
    });

    // test clock minutes & hours ticks
    [
      ["hours", 12],
      ["minutes", 48],
    ].map(([type, n]) => {
      expect(wc.shadowRoot.querySelectorAll(`[id^=${type}-ticks]`).length).toBe(
        n
      );
    });

    // extract a snapshot
    // expect(wc.shadowRoot.innerHTML).toMatchSnapshot();
  });
  it("add attributes with custom values ", () => {
    let labels = ["N", "E", "S", "w"];
    let timeZone = "Pacific/Tahiti";
    createWebComponent({
      name: ClockComponent.tagName,
      attributes: {
        "hours-labels": labels,
        "time-zone": timeZone,
      },
    });
    // get the web component from the DOM
    const wc = document.querySelector(ClockComponent.tagName);

    // check its attributes
    expect(
      wc.getAttribute(ClockComponent.attributes["hours-labels"])
    ).not.toBeNull();
    expect(
      wc.getAttribute(ClockComponent.attributes["time-zone"])
    ).not.toBeNull();

    // test default labels & timeZone
    expect(wc.hoursLabels).toEqual(labels);
    expect(wc.timeZone).not.toEqual("Europe/Paris");
    expect(wc.timeZone).toEqual(timeZone);

    // test ticks & labels divs
    [
      ["ticks", 0],
      ["labels", 4],
    ].map(([type, nChild]) => {
      let divType = wc.shadowRoot.querySelector(`#wc-clock__clock-${type}`);
      expect(divType).not.toBeNull();
      expect(divType.children.length).toEqual(nChild);
    });

    // test hands rotation based on time zone
    let date = new Date(
      new Date().toLocaleString("en", { timeZone: timeZone })
    );
    [
      ["minutes", date.getMinutes() * 6],
      ["hours", date.getHours() * 30 + date.getMinutes() / 2],
    ].map(([type, deg]) => {
      let hand = wc.shadowRoot.querySelector(`#wc-clock__clock-${type}-hand`);
      expect(hand).not.toBeNull();
      expect(hand.style.transform).toBe(`rotate(${deg}deg)`);
    });

    // expect(wc.shadowRoot.innerHTML).toMatchSnapshot();
  });
});
