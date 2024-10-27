---
sidebar_position: 1

sidebar_label: Home
hide_table_of_contents: true
---

import {Container, Card} from "@site/src/components/cards";

# Welcome to Valuit

Imagine a place were you can build Web3 apps with the simplicity of Web2. Imagine a place were you can empower communities, supercharge AI and easily integrate your app with other chains. Welcome to NEAR, you're gonna like it here.

<Container>
    <Card img={require("@site/static/img/docusaurus-social-card.jpg").default}
          title="NEAR Protocol"
          text="Learn what NEAR is and how it works"
          links={{
            "What is NEAR?": "/concepts/basics/protocol",
            "Named Accounts": "/concepts/protocol/account-id",
            "Access Keys": "/concepts/protocol/access-keys",
            "Transactions": "/concepts/protocol/transactions"
          }}
    />
    <Card img={require("@site/static/img/docusaurus-social-card.jpg").default}
          title="Chain Abstraction"
          text="Forget about the chain, focus on usability"
          links={{
            "What is Chain Abstraction?": "/build/chain-abstraction/what-is",
            "Chain Signatures ✨": "/build/chain-abstraction/chain-signatures",
            "Meta-transactions": "/build/chain-abstraction/meta-transactions",
            "FastAuth (Email login)": "/build/chain-abstraction/fastauth-sdk", 
          }}
    />
    <Card img={require("@site/static/img/docusaurus-social-card.jpg").default}
          title="Web3 Applications"
          text="Supercharge your App using NEAR"
          links={{
            "What are Web3 Applications?": "/build/web3-apps/what-is",
            "Quickstart ✨": "/build/web3-apps/quickstart",
            "Create an AI Assistant 🤖✨": "/build/web3-apps/ai/ai-assistant",
            "Use a Contract in Your Frontend": "/build/web3-apps/integrate-contracts",
            "Social Components (BOS)": "/build/near-components/what-is",
          }}
    />

</Container>

---

## External Resources

Here are more sources from our ecosystem that can help you to learn more about NEAR.

<div className="row cards">
  <div className="col col--6">
    <a href="https://dev.near.org/applications" target="_blank" rel="noopener noreferrer">
      <div className="card">
        <div className="card__image">
          <img src={require("@site/static/img/docusaurus-social-card.jpg").default} alt="Discover" />
        </div>
        <div className="card__body">
          <h3>
          Discover
          </h3>
          Discover awesome apps in the Near ecosystem
        </div>
      </div>
    </a>
  </div>
  <div className="col col--6">
    <a href="https://dev.near.org/applications" target="_blank" rel="noopener noreferrer">
      <div className="card">
        <div className="card__image">
          <img src={require("@site/static/img/docusaurus-social-card.jpg").default} alt="Discover" />
        </div>
        <div className="card__body">
          <h3>
          Discover
          </h3>
          Discover awesome apps in the Near ecosystem
        </div>
      </div>
    </a>
  </div>

</div>