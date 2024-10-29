"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5156],{3275:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>i,default:()=>a,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var s=r(4848),t=r(8453);const d={sidebar_position:4},i="Token Contract",l={id:"Smart Contracts/Valuit Library/token-contract",title:"Token Contract",description:"Contract Functions:",source:"@site/docs/Smart Contracts/Valuit Library/token-contract.md",sourceDirName:"Smart Contracts/Valuit Library",slug:"/Smart Contracts/Valuit Library/token-contract",permalink:"/Smart Contracts/Valuit Library/token-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/Sourav59580/valuit-doc/tree/main/docs/Smart Contracts/Valuit Library/token-contract.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Token Factory Contract",permalink:"/Smart Contracts/Valuit Library/token-factory-contract"},next:{title:"Identity Registry Contract",permalink:"/Smart Contracts/Valuit Library/identity-register-contract"}},h={},c=[{value:"Contract Functions:",id:"contract-functions",level:2},{value:"1. Init",id:"1-init",level:3},{value:"2. Force Transfer",id:"2-force-transfer",level:3},{value:"3. Batch Forced Transfer",id:"3-batch-forced-transfer",level:3},{value:"4. Mint",id:"4-mint",level:3},{value:"5. Batch Mint",id:"5-batch-mint",level:3},{value:"6. Burn",id:"6-burn",level:3},{value:"7. Batch Burn",id:"7-batch-burn",level:3},{value:"8. Freeze Partial Tokens",id:"8-freeze-partial-tokens",level:3},{value:"9. Batch Freeze Partial Tokens",id:"9-batch-freeze-partial-tokens",level:3},{value:"10. UnFreeze Partial Tokens",id:"10-unfreeze-partial-tokens",level:3},{value:"11. Batch unFreeze Partial Tokens",id:"11-batch-unfreeze-partial-tokens",level:3}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"token-contract",children:"Token Contract"})}),"\n",(0,s.jsx)(n.h2,{id:"contract-functions",children:"Contract Functions:"}),"\n",(0,s.jsx)(n.h3,{id:"1-init",children:"1. Init"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Signature"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:"solidity",children:"function init(\n    address _identityRegistry,\n    address _compliance,\n    string memory _name,\n    string memory _symbol,\n    uint8 _decimals,\n    address _onchainID\n) external\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Working:"})}),"\n",(0,s.jsx)(n.p,{children:"Initializes the contract with given parameters."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_identityRegistry"}),(0,s.jsx)(n.td,{children:"address"}),(0,s.jsx)(n.td,{children:"Address of the Identity registry"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_compliance"}),(0,s.jsx)(n.td,{children:"address"}),(0,s.jsx)(n.td,{children:"Address of the compliance contract"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_name"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Name of the token"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_symbol"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Symbol of the token"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_decimals"}),(0,s.jsx)(n.td,{children:"uint8"}),(0,s.jsx)(n.td,{children:"Decimals of the token"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_onchainID"}),(0,s.jsx)(n.td,{children:"address"}),(0,s.jsx)(n.td,{children:"Address of the on-chain ID of the token"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"2-force-transfer",children:"2. Force Transfer"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Signature"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:"solidity",children:"function forcedTransfer(\n    address _from,\n    address _to,\n    uint256 _amount\n) public\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Working:"})}),"\n",(0,s.jsx)(n.p,{children:"This function helps the Agent with Role to transfer frozen tokens to a whitelisted address without any approval."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Parameter"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_from"}),(0,s.jsx)(n.td,{children:"address"}),(0,s.jsx)(n.td,{children:"Address from whom tokens should be transferred"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_to"}),(0,s.jsx)(n.td,{children:"address"}),(0,s.jsx)(n.td,{children:"Agent address to whom tokens should be transferred"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_amount"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"Amount of Frozen tokens that needs to be transferred"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"3-batch-forced-transfer",children:"3. Batch Forced Transfer"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Working:"})}),"\n",(0,s.jsx)(n.p,{children:"This function helps the Agent with Role to transfer frozen tokens from more than 1 user to a whitelisted address without any approval."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Signature"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:"solidity",children:"function batchForcedTransfer(\n    address[] calldata _fromList,\n    address[] calldata _toList,\n    uint256[] calldata _amounts\n) external\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Parameter"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_fromlist"}),(0,s.jsx)(n.td,{children:"Array of addresses"}),(0,s.jsx)(n.td,{children:"Addresses from whom tokens should be transferred"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_toList"}),(0,s.jsx)(n.td,{children:"Array of addresses"}),(0,s.jsx)(n.td,{children:"Whitelisted address to whom tokens should be transferred"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_amount"}),(0,s.jsx)(n.td,{children:"Array of numbers"}),(0,s.jsx)(n.td,{children:"Amounts of Frozen tokens that need to be transferred"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"4-mint",children:"4. Mint"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Working:"})}),"\n",(0,s.jsx)(n.p,{children:"This function helps the Agent with Role to mint tokens to a user address."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Signature"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:"solidity",children:"function mint(\n    address _to,\n    uint256 _amount\n) public\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Parameter"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_to"}),(0,s.jsx)(n.td,{children:"address"}),(0,s.jsx)(n.td,{children:"Address to which tokens should be minted"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_amount"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"Number of tokens that should be minted."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"5-batch-mint",children:"5. Batch Mint"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Working:"})}),"\n",(0,s.jsx)(n.p,{children:"This function helps the Agent with Role to mint tokens from more than 1 user address."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Signature"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:"solidity",children:"function batchMint(\n    address[] calldata _toList,\n    uint256[] calldata _amounts\n) external\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Parameter"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_toList"}),(0,s.jsx)(n.td,{children:"Array of addresses"}),(0,s.jsx)(n.td,{children:"Addresses to which tokens should be minted"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_amounts"}),(0,s.jsx)(n.td,{children:"Array of number"}),(0,s.jsx)(n.td,{children:"Number of tokens that should be minted."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"6-burn",children:"6. Burn"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Working:"})}),"\n",(0,s.jsx)(n.p,{children:"This function helps the Agent with Role to burn tokens from a user address."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Signature"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:"solidity",children:"function burn(\n    address _userAddress,\n    uint256 _amount\n) public\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Parameter"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_userAddress"}),(0,s.jsx)(n.td,{children:"address"}),(0,s.jsx)(n.td,{children:"Address from which tokens should be burned"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_amount"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"Number of tokens that should be burned."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"7-batch-burn",children:"7. Batch Burn"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Working:"})}),"\n",(0,s.jsx)(n.p,{children:"This function helps the Agent with Role to burn tokens from more than 1 user address."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Signature"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:"solidity",children:"function batchBurn(\n    address[] calldata _userAddresses,\n    uint256[] calldata _amounts\n) external\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Parameter"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_userAddresses"}),(0,s.jsx)(n.td,{children:"Array of addresses"}),(0,s.jsx)(n.td,{children:"Addresses to which tokens should be burned"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_amounts"}),(0,s.jsx)(n.td,{children:"Array of number"}),(0,s.jsx)(n.td,{children:"Number of tokens that should be burned."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"8-freeze-partial-tokens",children:"8. Freeze Partial Tokens"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Working:"})}),"\n",(0,s.jsx)(n.p,{children:"This function helps the Agent with Role to freeze tokens from the user address."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Signature"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:"solidity",children:"function freezePartialTokens(\n    address _userAddress,\n    uint256 _amount\n) public\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Parameter"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_userAddress"}),(0,s.jsx)(n.td,{children:"address"}),(0,s.jsx)(n.td,{children:"Address from which tokens should be frozen"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_amount"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"Number of tokens that should be frozen."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"9-batch-freeze-partial-tokens",children:"9. Batch Freeze Partial Tokens"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Working:"})}),"\n",(0,s.jsx)(n.p,{children:"This function helps the Agent with Role to freeze partial tokens from more than 1 user address."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Signature"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:"solidity",children:"function batchFreezePartialTokens(\n    address[] calldata _userAddresses,\n    uint256[] calldata _amounts\n) external\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Parameter"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_userAddresses"}),(0,s.jsx)(n.td,{children:"Array of addresses"}),(0,s.jsx)(n.td,{children:"Addresses to which tokens should be frozen"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_amounts"}),(0,s.jsx)(n.td,{children:"Array of number"}),(0,s.jsx)(n.td,{children:"Number of tokens that should be frozen."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"10-unfreeze-partial-tokens",children:"10. UnFreeze Partial Tokens"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Working:"})}),"\n",(0,s.jsx)(n.p,{children:"This function helps the Agent with Role to unFreeze tokens from the user address."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Signature"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:"solidity",children:"function unfreezePartialTokens(\n    address _userAddress,\n    uint256 _amount\n) public\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Parameter"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_userAddress"}),(0,s.jsx)(n.td,{children:"address"}),(0,s.jsx)(n.td,{children:"Address from which tokens should be unfrozen"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_amount"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"Number of tokens that should be unfrozen."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"11-batch-unfreeze-partial-tokens",children:"11. Batch unFreeze Partial Tokens"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Working:"})}),"\n",(0,s.jsx)(n.p,{children:"This function helps the Agent with Role to unFreeze partial tokens from more than 1 user address."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Signature"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:"solidity",children:"function batchUnfreezePartialTokens(\n    address[] calldata _userAddresses,\n    uint256[] calldata _amounts\n) external\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Parameter"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_userAddresses"}),(0,s.jsx)(n.td,{children:"Array of addresses"}),(0,s.jsx)(n.td,{children:"Addresses to which tokens should be unfrozen"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_amounts"}),(0,s.jsx)(n.td,{children:"Array of number"}),(0,s.jsx)(n.td,{children:"Number of tokens that should be unfrozen."})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var s=r(6540);const t={},d=s.createContext(t);function i(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);