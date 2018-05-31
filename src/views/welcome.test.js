const assert = require("assert");
const welcome = require("./welcome");

describe("the welcome page", () => {
  it("should have a custom title", done => {
    const render = welcome();

    render((t, p, c) => {
      if (t === "title") {
        assert.equal(c, "Welcome");
        done();
      }
    });
  });

  it("should have a custom description", done => {
    const render = welcome();

    render((t, p) => {
      if (t === "meta" && p.name === "description") {
        assert.equal(p.content, "Welcome to hyperapp!");
        done();
      }
    });
  });

  it("should have a welcome header", done => {
    const render = welcome();

    render((t, p, c) => {
      if (t === "h1") {
        assert.equal(c, "Welcome");
        done();
      }
    });
  });
});
