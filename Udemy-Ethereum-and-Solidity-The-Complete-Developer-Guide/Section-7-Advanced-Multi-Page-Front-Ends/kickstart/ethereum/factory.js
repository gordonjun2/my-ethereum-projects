import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const campaignFactoryAddress = "0x0c49A4cc08978c2DcD9644853f39ddFFcf8dd003";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    campaignFactoryAddress
);

export default instance;