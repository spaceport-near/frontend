import ArrowBack from '../../assets/ArrowBack.svg';
import ArrowBackDark from '../../assets/ArrowBackDark.svg';
import StepLine from '../StepLine';
import RadioButton from '../RadioButton';
import { useEffect, useState } from 'react';
import { getAccounts } from '../../services/api';
import Loader from '../Loader';

const UnDockAccountSelection = ({
  closeModal,
  getStep,
  next,
  back,
  selectedAccount,
  setSelectedAccount,
}) => {
  const [accounts, setAccounts] = useState(null);

  const buttonNextIsDisabled = accounts && accounts.length !== 0;

  useEffect(() => {
    getAccounts()
      .then((data) => {
        console.log('all accounts', data.page.data);
        setAccounts(data.page.data);
      })
      .catch((e) => {
        setAccounts([]);
        console.log('Error get accounts', e);
      });
  }, []);

  return (
    <div className="h-screen">
      <div className="py-[20px]">
        <button
          onClick={closeModal}
          className="flex items-center text-center bg-white border-solid border-red rounded-[5px] border-[2px] gap-x-[15px] py-[6px] w-[292px] justify-center hover:shadow-md hover:shadow-red"
        >
          <img src={ArrowBack} alt="arrow" />
          <span className="font-normal text-[18px] leading-[22px]">
            Exit Docking Sequence
          </span>
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="w-[754px]">
          <h1 className="flex justify-center pb-[20px]">Account Selection</h1>
          <button
            className="flex pb-[10px] items-center justify-start"
            onClick={back}
          >
            <img src={ArrowBackDark} className="flex" alt="arrow" />
            <span className="font-normal text-[16px] leading-[20px] pl-[5px]">
              Go Back
            </span>
          </button>
          <div className="flex flex-col px-[70px] pt-[37px] justify-between h-[461px] bg-dark rounded-[10px]">
            <div className="border-b-[2px] border-solid border-primary mb-[15px] flex flex-col">
              <span className="font-bold leading-[152%] text-[18px] text-white">
                Select the account you wish to Undock
              </span>
            </div>
            <div className="flex flex-row gap-y-[15px] flex-wrap gap-x-[42px]">
              {accounts ? (
                accounts.map((item) => (
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
                <div className="flex w-screen justify-center">
                  <Loader />
                </div>
              )}
            </div>
            <div className="self-center flex pb-[30px] flex-col">
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
          </div>
        </div>
        <div className="flex items-center justify-center w-[754px] h-[100px]">
          <StepLine step={getStep()} />
        </div>
      </div>
    </div>
  );
};

export default UnDockAccountSelection;
