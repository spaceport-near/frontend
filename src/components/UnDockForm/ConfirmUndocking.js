import { useState } from 'react';
import UndockingItem from '../UndockingItem';
import useUserBalances from '../../hooks/useUserBalances';
import Loader from '../Loader';
import StepWrapper from '../StepWrapper';

const ConfirmUndocking = ({
  stepSettings,
  handleNextButton,
  selectedAccount,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const balances = useUserBalances(selectedAccount);

  return (
    <StepWrapper {...stepSettings}>
      <div className="flex flex-col primaryBorder rounded-[5px] px-[20px] py-[10px] items-center text-center gap-y-[10px]">
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
          {' '}
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
          I confirm that I want to undock my account and transfer the selected
          assets to{' '}
          <span className="text-white font-bold text-[18px] leading-[152%]">
            {selectedAccount}
          </span>
        </p>
      </div>
      <div className="flex flex-col self-center pt-[26px]">
        <button
          className="flex items-center justify-center text-[18px] m-auto h-[42px] px-[60px] bg-primary rounded-[4px] hover:bg-primaryLight disabled:bg-primaryLight"
          disabled={!isChecked}
          onClick={handleNextButton}
        >
          Confirm Undock
        </button>
      </div>
    </StepWrapper>
  );
};

export default ConfirmUndocking;
