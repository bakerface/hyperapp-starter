const sequence = (a, b) => h => b(a(h));
module.exports = args => args.reduce(sequence, h => h);
