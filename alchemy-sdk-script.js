// Setup: npm install alchemy-sdk
import * as dotenv from 'dotenv'
dotenv.config() // Ni idea si esto va a reemplazar el source

import { Alchemy, Network } from "alchemy-sdk";
import * as discord from "discord.js";

const config = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.MATIC_MAINNET,
};

const alchemy = new Alchemy(config);

const main = async () => {
  // Wallet address
  const address = "0x94be0efdc095191070d360a5AA068764810a8da5"; //sn4ke.eth 0x94be0efdc095191070d360a5AA068764810a8da5
  let contract = ["0x9d3aCa725a289c6E798355592Cd3dd5E43fA14A5"];  //Recordar Testear si es Case Sensitive
  const options = {contractAddresses: contract };
  
  // Get all NFTs
  const nfts = await alchemy.nft.getNftsForOwner(address, options );

  // Parse output
  const numNfts = nfts["totalCount"];
  const nftList = nfts["ownedNfts"];
  console.log(`Total NFTs owned by ${address}: ${numNfts} \n`);
  let i = 1;
  console.log("Num    Name     Contract")
  for (let nft of nftList) {
    console.log(`${i}. ${nft.title}  ${nft.contract.address}`);
    i++;
  }

};

main()
