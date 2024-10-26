---
sidebar_position: 3
---

# Token Factory Contract
**Contract Functions:**

1. **deployTREXSuite**

**Signature**

![deploytrexsuite](../images/deploytrexsuite.png)


**Working:**

Deploys new token suite contracts.

| **Parameters** | **Type** | **Description** |
| --- | --- | --- |
| _salt | string | Unique identifier for token deployment |
| _tokenDetails | struct | Struct containing token-related settings |
| _claimDetails | struct | Struct containing claim-related settings |
1. **setImplementationAuthority**

**Signature**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a349602e-6875-4b6c-be64-f5e044c48bbb/7acfc511-10ab-4b89-ad6b-13a400b00a78/image.png)

**Working:**

Sets a new Implementation Authority address for the contract

| **Parameters** | **Type** | **Description** |
| --- | --- | --- |
| implementationAuthority_ | address | Unique identifier for token deployment |