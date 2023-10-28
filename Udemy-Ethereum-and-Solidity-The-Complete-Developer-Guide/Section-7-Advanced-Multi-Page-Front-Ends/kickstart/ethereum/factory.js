import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const campaignFactoryAddress = "0xC9e9A7A9815C2D8f03Aa9e0397bd9e72221fF596";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    campaignFactoryAddress
);

export default instance;