module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "192.168.1.37", //"127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
