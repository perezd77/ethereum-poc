import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x265b0AbFbB4E8D90141749F7e5e63999A3b74a7c"
);

export default instance;
