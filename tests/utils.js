export async function createWebComponent({
  name = "wc-clock",
  attributes = {},
}) {
  const wc = document.createElement(name);
  for (const attribute in attributes) {
    wc.setAttribute(attribute, attributes[attribute]);
  }
  document.body.appendChild(wc);
  return wc;
}

export async function delay(t) {
  return new Promise((resolve) => setTimeout(resolve, t));
}

