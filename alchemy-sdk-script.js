// Setup: npm install alchemy-sdk
import * as dotenv from 'dotenv'
dotenv.config() // Ni idea si esto va a reemplazar el source

import { Alchemy, Network } from "alchemy-sdk";
import * as discord from "discord.js";

const config = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(config);

const main = async () => {
  // Wallet address
  const address = "sn4ke.eth"; //sn4ke.eth 0x94be0efdc095191070d360a5AA068764810a8da5
  console.log(address)
  console.log(process.env.ALCHEMY_API_KEY)
  let contract = ["0x659a4bdaaacc62d2bd9cb18225d9c89b5b697a5a"]; //Recordar Testear si es Case Sensitive
  console.log('Contrato a filtrar:', contract[0]);

  // Get all NFTs
  const nfts = await alchemy.nft.getNftsForOwner(address, contract );

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
