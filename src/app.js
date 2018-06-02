import { Route, Switch, location } from "@hyperapp/router";
import welcome from "./welcome";

export const state = {
  location: location.state,
  welcome: welcome.state
};

export const actions = {
  location: location.actions,
  welcome: welcome.actions
};

const renderView = h => view => (state, actions) => view(state, actions)(h);

export const view = h => () => {
  const render = renderView(h);

  return h("div", { id: "app" }, [
    h(Switch, {}, [h(Route, { path: "/", render: render(welcome.view) }, [])])
  ]);
};
