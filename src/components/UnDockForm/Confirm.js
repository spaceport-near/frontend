import { useState } from 'react';
import StepWrapper from '../StepWrapper';
import ArrowBackDark from '../../assets/ArrowBackDark.svg';

const Confirm = ({ stepSettings, next }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <StepWrapper {...stepSettings}>
      <div className="text-white text-[24px]">
        Do you confirm that you've done all the steps to secure your account?
      </div>
      <div className="flex items-center gap-[13px] text-center ">
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
        <span className="font-normal text-white text-[18px] leading-[152%]">
          I understand that Spaceport is no longer responsible for my wallet.
        </span>
      </div>
      <div className="flex flex-col self-center pt-[26px]">
        <button
          className="flex items-center justify-center text-[18px] m-auto h-[42px] px-[60px] bg-primary rounded-[4px] hover:bg-primaryLight disabled:bg-primaryLight"
          disabled={!isChecked}
          onClick={next}
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

export default Confirm;
