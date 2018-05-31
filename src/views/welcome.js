module.exports = () => h =>
  h("div", { id: "welcome" }, [
    h("head", {}, [
      h("title", {}, "Welcome"),
      h("meta", { name: "description", content: "Welcome to hyperapp!" })
    ]),
    h("h1", {}, "Welcome")
  ]);
