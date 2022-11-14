import ArrowBack from '../../assets/ArrowBack.svg';
import ArrowBackDark from '../../assets/ArrowBackDark.svg';
import StepLine from '../StepLine';
import { useState } from 'react';
import StepWrapper from '../StepWrapper';

const TermsAndConditions = ({ stepSettings, next }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <StepWrapper {...stepSettings}>
      <div className="text-white">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
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
          I have read and accept the terms & conditions.
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

export default TermsAndConditions;
