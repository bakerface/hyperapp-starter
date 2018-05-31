import { Route, Switch, location } from "@hyperapp/router";
import welcome from "./views/welcome";

export const state = {
  location: location.state
};

export const actions = {
  location: location.actions
};

const render = (h, c) => (state, actions) => c(state, actions)(h);

export const view = h => () =>
  h("div", { id: "app" }, [
    h(Switch, {}, [h(Route, { path: "/", render: render(h, welcome) }, [])])
  ]);
