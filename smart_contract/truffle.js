const Caver = require("caver-js");

const HOST = "localhost";
const PORT = "8551";
const NETWORK_ID = "1000";
const FROM = "1a12d17ffb3e33a5cc092c909bc2d4fc5fd47df6";
const GASLIMIT = 20000000;

module.exports = {
  networks: {
    klaytn: {
      host: HOST,
      port: PORT,
      network_id: NETWORK_ID,
      from: FROM,
      gas: GASLIMIT,
      gasPrice: null
    }
  }
};
