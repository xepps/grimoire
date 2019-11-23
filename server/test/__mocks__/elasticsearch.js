function Client() {}

Client.prototype.search = async query => Promise.resolve({ calledESWith: query });

module.exports = {
  Client,
};
