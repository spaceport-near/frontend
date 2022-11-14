import ArrowBackDark from '../../assets/ArrowBackDark.svg';
import RadioButton from '../RadioButton';
import { useEffect } from 'react';
import { getAccounts } from '../../services/api';
import Loader from '../Loader';
import StepWrapper from '../StepWrapper';

const UnDockAccountSelection = ({
  stepSettings,
  next,
  selectedAccount,
  setSelectedAccount,
  userAccounts,
  setUserAccounts,
}) => {
  const buttonNextIsDisabled = userAccounts && userAccounts.length !== 0;

  useEffect(() => {
    getAccounts()
      .then((data) => {
        console.log('all accounts', data.page.data);
        setUserAccounts(data.page.data);
      })
      .catch((e) => {
        setUserAccounts([]);
        console.log('Error get accounts', e);
      });
  }, []);

  return (
    <StepWrapper {...stepSettings}>
      <div className="flex flex-row gap-y-[15px] gap-x-[40px] flex-wrap h-screen items-start justify-start">
        {userAccounts ? (
          userAccounts.map((item) => (
            <RadioButton
              key={item.accountId}
              id={item.accountId}
              value={item.accountId}
              selected={selectedAccount}
              setSelect={setSelectedAccount}
              label={item.accountId}
            />
          ))
        ) : (
          <div className="flex w-screen items-center justify-center">
            <Loader />
          </div>
        )}
      </div>
      <div className="flex flex-col self-center pt-[26px]">
        <button
          className="flex items-center justify-center text-[18px] m-auto h-[42px] px-[60px] bg-primary rounded-[4px] hover:bg-primaryLight disabled:bg-primaryLight"
          onClick={next}
          disabled={!buttonNextIsDisabled}
        >
          Next
          <img
            src={ArrowBackDark}
            alt="button"
            className="pr-[10px] rotate-180"
          />
        </button>
      </div>
    </StepWrapper>
  );
};

export default UnDockAccountSelection;
