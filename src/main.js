import { app, h } from "hyperapp";
import { state, actions, view } from "./app";
import effects from "./effects";

app(state, actions, view(effects(h)), document.body);
