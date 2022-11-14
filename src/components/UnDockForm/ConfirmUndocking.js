import { useState } from 'react';
import ArrowBack from '../../assets/ArrowBack.svg';
import ArrowBackDark from '../../assets/ArrowBackDark.svg';
import StepLine from '../StepLine';
import UndockingItem from '../UndockingItem';
import useUserBalances from '../../hooks/useUserBalances';
import Loader from '../Loader';

const ConfirmUndocking = ({
  closeModal,
  getStep,
  back,
  handleNextButton,
  selectedAccount,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const balances = useUserBalances(selectedAccount);

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
          <h1 className="flex justify-center pb-[20px]">Confirm Undocking</h1>
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
                Confirm transfer of assets from {selectedAccount}
              </span>
            </div>
            <div className=" flex flex-col primaryBorder rounded-[5px] px-[20px] py-[10px] items-center text-center gap-y-[10px]">
              {balances ? (
                balances.map((item, id) => (
                  <UndockingItem
                    key={id}
                    name={item.name}
                    label={item.label}
                    amount={item.amount}
                  />
                ))
              ) : (
                <Loader />
              )}
            </div>
            <div className="pt-[10px] pb-[10px]">
              <span className="text-white font-bold text-[16px] leading-[152%]">
                Undocking Fee:
              </span>
              <span className="text-white font-normal text-[16px] leading-[152%]">
                $X.XX
              </span>
            </div>
            <div className="flex items-start gap-[13px] text-center ">
              <div className="flex h-6 items-center">
                <input
                  id="comments"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-3 border-dark focus:ring-primary"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
              </div>
              <p className="text-white font-normal text-[18x] leading-[152%]">
                I confirm that I want to undock my account and transfer the
                selected assets to{' '}
                <span className="text-white font-bold text-[18px] leading-[152%]">
                  {selectedAccount}
                </span>
              </p>
            </div>
            <div className="self-center flex pb-[30px] flex-col">
              <button
                className="flex items-center justify-center text-[18px] m-auto h-[42px] px-[60px] bg-primary rounded-[4px] hover:bg-primaryLight disabled:bg-primaryLight"
                disabled={!isChecked}
                onClick={handleNextButton}
              >
                Confirm Undock
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

export default ConfirmUndocking;
