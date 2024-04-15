const alchemykey = "wss://eth-sepolia.g.alchemy.com/v2/ce74JnuYTa7tAvBHoegMFjC7AjbLEGqQ"
const {createAlchemyWeb3} = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemykey);

const contractABI = require("../contract-abi.json");
const alchemyKey = "wss://eth-sepolia.g.alchemy.com/v2/ce74JnuYTa7tAvBHoegMFjC7AjbLEGqQ"
const contractAddress = "0xD716c53D841a4bDC27cf4308947cd4Be2E16103a";

export const helloWorldContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);



export const loadCurrentMessage = async () => { 
  const message = await helloWorldContract.methods.message().call();
  return message;
};

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "👆🏻 write a message in the text-field above.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😢" + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download`}>
              You must install Metamask, a virtual Ethereum wallet, in your browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "🦊 Connect to Metamask using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😢" + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download`}>
              You must install Metamask, a virtual Ethereum wallet, in your browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const updateMessage = async (address, message) => {
  if (!window.ethereum || address === null) {
    return {
      status: "💡 Connect your Metamask wallet to update the message on the blockchain.",
    };
  }

  if (message.trim() === "") {
    return {
      status: "❌ Your message cannot be an empty string.",
    };
  }

  const transactionParameters = {
    to: contractAddress,
    from: address,
    data: helloWorldContract.methods.update(message).encodeABI(),
  };
  
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return {
      status: (
        <span>
          ✅{" "}
          <a target="_blank" href={`https://sepolia.etherscan.io/tx/${txHash}`}>
            View the status of your transaction on Etherscan!
          </a>
          <br />
          ℹ Once the transaction is verified by the network, the message will be updated automatically.
        </span>
      ),
    };
  } catch (error) {
    return {
      status: "😢" + error.message,
    };
  }
};



