import Template from "./template.html?raw";

export const defaultSettings = {
  get componentName() {
    return "wc-clock";
  },
  get componentAttributes() {
    return {
      "minutes-ticks": "minutes-ticks",
      "hours-ticks": "hours-ticks",
      "time-zone": "time-zone",
      "fixed-time": "fixed-time",
      "hours-labels": "hours-labels",
    };
  },
  get componentTemplate() {
    const template = document.createElement("template");
    template.innerHTML = Template;
    return template;
  },
  get hoursLabels() {
    return Array.from({ length: 12 }, (_, k) => k + 1);
  },
  get fixedTime() {
    return [10, 10, 30];
  },
  get timeZone() {
    return "Europe/Paris";
  },
};
