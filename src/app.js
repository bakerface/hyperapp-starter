import { h } from "hyperapp";
import { location } from "@hyperapp/router";

export const state = {
  location: location.state
};

export const actions = {
  location: location.actions
};

export const view = () => h("div", { id: "app" }, []);
