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
    <Card img={require("@site/static/img/intro/getting started.png").default}
          title="Getting Started"
          text="Dive into the basics and understand the fundamentals"
          links={{
            "Navigating our Docs": "/docs/Getting Started/navigating-our-docs",
            "What is tokenization?": "/docs/Getting Started/What is Tokenization/the-basics",
          }}
    />
    <Card img={require("@site/static/img/intro/Tokenization.png").default}
          title="Tokenization"
          text="Transform assets into digital tokens seamlessly"
          links={{
            "What is Valuit?": "/docs/Tokenization/what-is-valuit",
            "Asset Owner Info": "/docs/Tokenization/Asset Owner Info/services",
            "Investor Info": "/docs/Tokenization/Investor Info/ecosystem", 
          }}
    />
    <Card img={require("@site/static/img/intro/DeFi - Coming Soon.png").default}
          title="DeFi - Coming Soon"
          text="Discover decentralized finance with Valuit"
          links={{
            "What is ValuX?": "/docs/DeFi - Coming Soon/what-is-valux",
          }}
    />
<Card img={require("@site/static/img/intro/$VAL - Coming Soon.png").default}
          title="$VAL - Coming Soon"
          text="Learn about $VAL token"
          links={{
            "What is $VAL?": "/docs/$VAL - Coming Soon/what-is-$val",
            "Functionality": "/docs/$VAL - Coming Soon/functionality",
          }}
    />
    <Card img={require("@site/static/img/intro/smart contract.png").default}
          title="Smart Contracts"
          text="Explore smart contracts of Valuit"
          links={{
            "The Basics": "/docs/Smart Contracts/The Basics/how-it-works",
            "Valuit Library": "/docs/Smart Contracts/Valuit Library/overview",
          }}
    />
    <Card img={require("@site/static/img/intro/Glossary.png").default}
          title="Glossary"
          text="Navigate blockchain terms and definitions"
          links={{
            "Key Terms": "/docs/Glossary/key-terms",
            "Blockchain & Tokenization": "/docs/Glossary/blockchain-and-tokenization",
            "Financial & Regulatory": "/docs/Glossary/financial-and-regulatory",
          }}
    />
</Container>
