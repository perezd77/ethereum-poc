const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "cry ensure vault unhappy exit genuine vivid please bitter spray forget aim",
  "https://rinkeby.infura.io/v3/86792d054aaf4a3fa1ebbab7255a2cb4"
);

const web3 = new Web3(provider);

const deploy = async () => {
  accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy contract from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: "1000000" });

  console.log("Contract deployed at address", result.options.address);
};
deploy();
