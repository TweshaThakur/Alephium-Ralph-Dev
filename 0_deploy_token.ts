import { DeployFunction,Deployer,Network } from "@alephium/cli";
import {Settings } from "./code/alephium.config";
import { symbolName } from "typescript";
import {Token } from "./code/artifacts/ts"


const deployToken: DeployFunction<Settings> = async(deployer: Deployer, 
    network: Network<Settings>) => {
        const issueTokenAmount = 1000n
        const result = await deployer.deployContract(Token,{
            initialFields: {
                name: Buffer.from('LPU-Token','utf-8').toString(),
                symbol: Buffer.from('LPU','utf-8').toString(),
                decimals: 2n,
                supply: 10000n,
            },
            issueTokenAmount: 100n,
            issueTokenTo: deployer.account.address
        })
        const contractAddress = result.contractInstance.address 
        const tokenId = result.contractInstance.contractId 

        console.log('Contract Address: ',contractAddress)
        console.log('Token ID: ', tokenId)
        
    }