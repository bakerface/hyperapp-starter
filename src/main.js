import { app } from "hyperapp";
import { state, actions, view } from "./app";

export default app(state, actions, view, document.body);
