---
sidebar_position: 1

sidebar_label: Home
hide_table_of_contents: true
---

import {Container, Card} from "@site/src/components/cards";

# Welcome to Valuit

Welcome to Valuit, your gateway to the future of digital asset tokenization and decentralized finance. Valuit enables you to transform tangible assets into digital tokens, opening new avenues for ownership, liquidity, and investment. Built on the Base chain, Valuit seamlessly combines user-friendly interfaces with robust blockchain technology, making it easy to create, manage, and trade tokenized assets. Whether you're an asset owner, investor, or developer, Valuit provides the tools and resources to thrive in the decentralized economy. Join us as we bridge traditional finance with the power of blockchain—welcome to the next era of asset management.

<iframe src="https://valuit.com/videos/valuit-intro.mp4" width="799" height="450" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


<Container>
    <Card img={require("@site/static/img/docusaurus-social-card.jpg").default}
          title="Getting Started"
          text="Dive into the basics and understand the fundamentals"
          links={{
            "Navigating our Docs": "/concepts/basics/protocol",
            "What is tokenization?": "/concepts/protocol/account-id",
          }}
    />
    <Card img={require("@site/static/img/docusaurus-social-card.jpg").default}
          title="Tokenization"
          text="Transform assets into digital tokens seamlessly"
          links={{
            "What is Valuit?": "/build/chain-abstraction/what-is",
            "Asset Owner Info": "/build/chain-abstraction/chain-signatures",
            "Investor Info": "/build/chain-abstraction/meta-transactions", 
          }}
    />
    <Card img={require("@site/static/img/docusaurus-social-card.jpg").default}
          title="DeFi - Coming Soon"
          text="Discover decentralized finance with Valuit"
          links={{
            "What is ValuX?": "/build/web3-apps/what-is",
          }}
    />
<Card img={require("@site/static/img/docusaurus-social-card.jpg").default}
          title="$VAL - Coming Soon"
          text="Learn about $VAL token"
          links={{
            "What is $VAL?": "/concepts/basics/protocol",
            "Functionality": "/concepts/protocol/account-id",
          }}
    />
    <Card img={require("@site/static/img/docusaurus-social-card.jpg").default}
          title="Smart Contracts"
          text="Explore smart contracts of Valuit"
          links={{
            "The Basics": "/build/chain-abstraction/what-is",
            "Valuit Library": "/build/chain-abstraction/chain-signatures",
          }}
    />
    <Card img={require("@site/static/img/docusaurus-social-card.jpg").default}
          title="Glossary"
          text="Navigate blockchain terms and definitions"
          links={{
            "Key Terms": "/build/web3-apps/what-is",
            "Blockchain & Tokenization": "/build/web3-apps/quickstart",
            "Financial & Regulatory": "/build/web3-apps/ai/ai-assistant",
          }}
    />
</Container>
