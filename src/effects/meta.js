module.exports = h => (tag, props, children) => {
  if (tag === "meta") {
    document
      .querySelector(`meta[name=${props.name}`)
      .setAttribute("content", props.content);

    return null;
  }

  return h(tag, props, children);
};
