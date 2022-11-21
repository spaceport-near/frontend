import { useEffect } from 'react';
import { useAuth } from '../../context/AuthProvider';
import { getAccounts } from '../../services/api';
import RadioButton from '../RadioButton';
import Loader from '../Loader';
import StepWrapper from '../StepWrapper';
import ArrowBackDark from '../../assets/ArrowBackDark.svg';

const UnDockAccountSelection = ({
  stepSettings,
  next,
  selectedAccount,
  setSelectedAccount,
  userAccounts,
  setUserAccounts,
}) => {
  const { profile, googleAuth } = useAuth();
  const buttonNextIsDisabled =
    selectedAccount && userAccounts && userAccounts.length !== 0;

  useEffect(() => {
    getAccounts(profile.googleId, googleAuth)
      .then((data) => setUserAccounts(data.page.data))
      .catch((e) => setUserAccounts([]));
  }, []);

  const renderAccounts = () =>
    userAccounts.length === 0 ? (
      <div className="text-white">
        Currently you have no accounts in Spaceport
      </div>
    ) : (
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
    );

  return (
    <StepWrapper {...stepSettings}>
      <div className="flex flex-col flex-wrap gap-y-[15px] gap-x-[40px] h-[200px]">
        {userAccounts ? (
          renderAccounts()
        ) : (
          <div className="flex h-full justify-center">
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
