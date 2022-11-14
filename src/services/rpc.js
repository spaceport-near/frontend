import { providers } from 'near-api-js';
import { Buffer } from 'buffer';

const RPC_URL = 'https://rpc.testnet.near.org';

export const providerViewFunction = async (
  contractId,
  { methodName, args }
) => {
  const provider = new providers.JsonRpcProvider({ url: RPC_URL });

  const queryData = {
    request_type: 'call_function',
    account_id: contractId,
    method_name: methodName,
    args_base64: window.btoa(JSON.stringify(args)),
    finality: 'final',
  };

  return await provider
    .query({ ...queryData })
    .then((res) => JSON.parse(Buffer.from(res.result).toString()));
};

export const viewNearAccount = async (accountId) => {
  const queryData = {
    request_type: 'view_account',
    finality: 'final',
    account_id: accountId,
  };

  const provider = new providers.JsonRpcProvider({ url: RPC_URL });

  return await provider.query({ ...queryData });
};

export const ftGetBalance = async (tokenId, accountId) => {
  return await providerViewFunction(tokenId, {
    methodName: 'ft_balance_of',
    args: { account_id: accountId },
  }).catch((e) => console.log(e));
};
