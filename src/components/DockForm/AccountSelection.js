import { useState } from 'react';
import StepWrapper from '../StepWrapper';
import ArrowBackDark from '../../assets/ArrowBackDark.svg';

const AccountSelection = ({
  stepSettings,
  phrase,
  handleChangePhrase,
  handleDockAccount,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <StepWrapper {...stepSettings}>
      <span className="text-[14px] leading-[152%] font-normal text-white">
        Type your 12 word recovery phrase, then click below to begin the
        recovery process.
      </span>
      <div className="pt-[20px] pb-[42px]">
        <textarea
          placeholder="Enter seed phrase"
          className="w-full h-[80px] bg-[#353535] px-[11px] py-[6px] text-start text-[#B1B1B1] rounded-[4px] resize-none"
          autoComplete="off"
          autoCapitalize="off"
          value={phrase}
          onChange={handleChangePhrase}
        />
      </div>
      <div className="flex gap-x-[10px] items-start">
        <div className="flex h-5 items-center">
          <input
            id="comments"
            name="comments"
            type="checkbox"
            className="h-4 w-4 rounded border-3 border-dark focus:ring-primary"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
        </div>
        <span className="text-[18] text-white leading-[152%] font-normal">
          I want to grant full access and transfer all assets to SPACEPORT from
          the selected account.
        </span>
      </div>
      <div className="self-center flex pt-[26px] flex-col">
        <button
          className="flex items-center justify-center m-auto h-[42px] px-[20px] bg-primary rounded-[4px] hover:bg-primaryLight disabled:bg-primaryLight"
          disabled={!isChecked}
          onClick={handleDockAccount}
        >
          Dock Account
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

export default AccountSelection;
