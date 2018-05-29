import { app } from "hyperapp";
import { state, actions, view } from "./app";

app(state, actions, view, document.body);
