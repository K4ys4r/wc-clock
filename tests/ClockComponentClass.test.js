import { describe, expect, it } from "vitest";
import { ClockComponent } from "../lib/index";
const attrs = [
  "fixed-time",
  "hours-labels",
  "hours-ticks",
  "minutes-ticks",
  "time-zone",
];
describe("ClockComponent Class", () => {
  it("test class attribute", () => {
    expect(ClockComponent.tagName).toBe("wc-clock");
    expect(Object.keys(ClockComponent.attributes).sort()).toEqual(attrs);
    expect(Object.values(ClockComponent.attributes).sort()).toEqual(attrs);
  });

  it("test class instance", () => {
    let wc = new ClockComponent();
    expect(wc).not.toBeNull();
    expect(wc).toBeInstanceOf(ClockComponent);
    expect(wc).toBeInstanceOf(HTMLElement);
    expect(wc).toBeTypeOf("object");
    expect(wc.hoursLabels).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    expect(wc.fixedTime).toBeUndefined();
    expect(wc.timeZone).toBeUndefined();
    expect(wc.shadowRoot.innerHTML).not.toBeNull();
  });
});
