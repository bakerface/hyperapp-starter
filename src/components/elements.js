import { h } from "hyperapp";

export const el = name => (props, children) =>
  Array.isArray(props) ? h(name, {}, props) : h(name, props, children);

export const div = el("div");
