import { app, h } from "hyperapp";
import { state, actions, view } from "./app";

function render(t, p, c) {
  if (t === "title") {
    document.querySelector("title").innerHTML = c;
    return null;
  }

  if (t === "meta") {
    document
      .querySelector(`meta[name=${p.name}`)
      .setAttribute("content", p.content);

    return null;
  }

  return h(t, p, c);
}

app(state, actions, view(render), document.body);
