module.exports = h => (tag, props, children) => {
  if (tag === "title") {
    document.querySelector("title").innerHTML = children;
    return null;
  }

  return h(tag, props, children);
};
