---
author: Nasheh Annafii
pubDatetime: 2025-10-12T09:00:00Z
modDatetime: 2025-10-12T09:00:00Z
title: NFTs — Beyond JPEGs: Standards, Marketplaces, and Tradeoffs
slug: nfts
featured: false
draft: false
tags:
  - nft
  - blockchain
  - web3
description: An approachable guide to NFTs: what they are, token standards, marketplaces, security risks, and environmental/societal tradeoffs.
---

# NFTs — Beyond JPEGs: Standards, Marketplaces, and Tradeoffs

Non-fungible tokens (NFTs) exploded into mainstream attention as collectible digital assets, but they are more than pictures with provenance. NFTs are token records on blockchains that represent unique assets — digital or physical — and enable ownership, transfer, and composability.

This post walks through the fundamentals, important token standards, where NFTs are traded, common security issues, and the environmental and societal conversations around NFTs.

## What is an NFT?

An NFT is a unique token recorded on a blockchain that represents ownership or proof-of-authenticity for an asset. Unlike cryptocurrencies (e.g., ETH) which are fungible, each NFT has distinguishing data or metadata that makes it one-of-a-kind.

- **On-chain vs off-chain**: Some NFTs store the asset or metadata directly on-chain (costly), while many store metadata off-chain (IPFS, centralized CDN) and point to it via a URL in the token metadata.
- **Provenance**: The blockchain records a permanent history of ownership and transfers, giving provenance to the asset.

## Common token standards

- **ERC-721 (Ethereum)**: The original standard for non-fungible tokens — each token has a unique ID and metadata URI.
- **ERC-1155 (Ethereum)**: A multi-token standard that supports fungible and non-fungible items in a single contract — useful for game assets where some items are stackable.
- **Other chains**: Solana (Metaplex standard), Flow (Dapper Labs), and newer standards tailored to their ecosystems.

Choosing a standard depends on requirements: exclusivity and simplicity (ERC-721) or efficiency and batch operations (ERC-1155).

## How NFTs are minted and stored

- **Minting**: The process of creating a token on-chain, typically involving a transaction that writes token data and metadata URIs to contract storage.
- **Metadata**: A JSON file describing the asset (name, description, image URL, attributes). Often stored on IPFS or a CDN.
- **Storage tradeoffs**: On-chain storage is immutable and censorship-resistant but expensive. IPFS + pinned gateways balance cost and decentralization; centralized CDNs are cheaper but reintroduce central points of failure.

## Marketplaces and platforms

Popular marketplaces handle discovery, bidding, royalties, and gas optimization:

- **OpenSea**: Widely used marketplace for Ethereum and some layers.
- **Magic Eden**: Popular on Solana.
- **Rarible, Foundation, Blur**: Other notable platforms with different fee/slash/royalty models.

Marketplaces often implement lazy minting (seller signs metadata off-chain) to reduce upfront gas costs — actual on-chain minting happens at purchase time.

## Royalties and creator economics

Marketplace royalties enable creators to receive a percentage of secondary sales. However, royalties rely on marketplaces to enforce them; on-chain enforcement is more robust but can be complicated across marketplaces.

## Security risks and scams

- **Phishing & social engineering**: Scammers try to trick users into signing transactions that transfer NFTs or grant approvals to malicious contracts.
- **Malicious contracts & approvals**: Approving a marketplace or contract with unlimited allowances can let attackers drain assets. Always check the exact function and address you're approving.
- **Fake collections & impersonation**: Scammers copy art and deploy fake collections; check contract addresses and verified badges.
- **Rug pulls & mint scams**: Projects may promise utilities and then disappear with funds.

Safety tips:

- Verify contract addresses and project metadata.
- Use hardware wallets for high-value assets.
- Revoke unnecessary approvals (via tools like Etherscan, Revoke.cash).

## Environmental and societal concerns

Two major conversations around NFTs are energy use and cultural impact.

- **Energy**: Proof-of-work chains (historically Ethereum pre-Merge) had high energy consumption per transaction. Ethereum's shift to proof-of-stake drastically reduced energy usage. Different chains have varied environmental footprints.
- **Cultural impacts**: NFTs changed digital art markets and ownership models, but they also raised concerns about speculation, copyright, and exclusionary pricing.

## Use cases beyond collectibles

- **Digital identity & credentials**: NFTs can represent certificates, badges, or academic credentials.
- **Gaming & virtual goods**: True ownership of in-game items and cross-platform portability.
- **Real-world assets**: Tokenized real estate, limited-edition physical goods, and supply-chain provenance.

## Best practices for creators and buyers

- Creators: pin metadata to IPFS, explicitly document editions/rights, and implement transparent royalty schemes.
- Buyers: verify project contracts, avoid signing unknown transactions, and consider custody strategies (hardware wallets, multisig).

## Closing thoughts

NFTs are a flexible primitive for representing uniqueness on-chain. They open new economic and creative possibilities, but they also require caution — understand what rights the token actually confers and stay vigilant against common scams.

### Sources & further reading

- Ethereum ERC-721 standard: https://eips.ethereum.org/EIPS/eip-721
- ERC-1155 standard: https://eips.ethereum.org/EIPS/eip-1155
- Metaplex (Solana NFT standard): https://docs.metaplex.com/
- Revoke approvals: https://revoke.cash/
