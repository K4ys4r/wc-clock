import "./wc-clock.js";
import { ClockComponent } from "./wc-clock.js";

const InputTypes = Object.freeze({
  checkbox: "checkbox",
  text: "text",
  color: "color",
});

function getInputValue(el, type) {
  switch (type) {
    case InputTypes.checkbox:
      return el.target.checked;
    case InputTypes.text:
    case InputTypes.color:
      return el.target.value;
    default:
      return undefined;
  }
}

let inputs = {
  "hours-ticks": {
    type: "checkbox",
    "html-attribute": ClockComponent.attributes["hours-ticks"],
  },
  "min-ticks": {
    type: "checkbox",
    "html-attribute": ClockComponent.attributes["minutes-ticks"],
  },
  "fixed-time": {
    type: "text",
    "html-attribute": ClockComponent.attributes["fixed-time"],
  },
  "time-zone": {
    type: "text",
    "html-attribute": ClockComponent.attributes["time-zone"],
  },
  "hours-labels": {
    type: "text",
    "html-attribute": ClockComponent.attributes["hours-labels"],
  },
  "bg-color": { type: "color", "css-variable": "--clock-background-color" },
  "labels-color": { type: "color", "css-variable": "--clock-color" },
  "hour-hand-clr": { type: "color", "css-variable": "--hours-hand-color" },
  "min-hand-clr": { type: "color", "css-variable": "--minutes-hand-color" },
  "sec-hand-clr": { type: "color", "css-variable": "--seconds-hand-color" },
};

const wcClock = document.getElementById("active-clock");
for (const key in inputs) {
  let input = inputs[key];
  let el = document.querySelector(`#${key}`);
  if (el) {
    el.addEventListener("input", (e) => {
      let value = getInputValue(e, input.type);
      if (input.hasOwnProperty("html-attribute")) {
        value &&
          wcClock.setAttribute(
            input["html-attribute"],
            input.type === InputTypes.checkbox ? "" : value
          );
        !value && wcClock.removeAttribute(input["html-attribute"]);
      }
      if (input.hasOwnProperty("css-variable")) {
        wcClock.style.setProperty(input["css-variable"], value);
      }
    });
  }
}
