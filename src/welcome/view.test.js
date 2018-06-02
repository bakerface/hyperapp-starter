const assert = require("assert");
const view = require("./view");

describe("the welcome view", () => {
  it("should have a custom title", done => {
    const render = view();

    render((t, p, c) => {
      if (t === "title") {
        assert.equal(c, "Welcome");
        done();
      }
    });
  });

  it("should have a custom description", done => {
    const render = view();

    render((t, p) => {
      if (t === "meta" && p.name === "description") {
        assert.equal(p.content, "Welcome to hyperapp!");
        done();
      }
    });
  });

  it("should have a welcome header", done => {
    const render = view();

    render((t, p, c) => {
      if (t === "h1") {
        assert.equal(c, "Welcome");
        done();
      }
    });
  });
});
