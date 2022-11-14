import { useEffect, useState } from 'react';
import { viewNearAccount } from '../services/rpc';
import { ftGetBalance } from '../services/rpc';
import { toPrecision, toReadableNumber } from '../utils/numbers';

const useUserBalances = (accountId) => {
  const [balances, setBalances] = useState([]);

  useEffect(() => {
    Promise.all([
      viewNearAccount(accountId),
      ftGetBalance('token.pembrock.testnet', accountId),
    ]).then((data) => {
      setBalances([
        {
          name: 'NEAR',
          label: 'NEAR',
          amount: toPrecision(toReadableNumber(24, data[0].amount), 2),
        },
        {
          name: 'PEM',
          label: 'PEM',
          amount: toPrecision(toReadableNumber(18, data[1]), 2),
        },
      ]);
    });
  }, []);

  return balances;
};

export default useUserBalances;
