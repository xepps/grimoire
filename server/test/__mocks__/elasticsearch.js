function Client() {}

Client.prototype.search = async query => Promise.resolve({
  calledESWith: query,
  hits: {
    total: { value: 1 },
    hits: [{ _source: { calledESWith: query } }],
  },
});

module.exports = {
  Client,
};
