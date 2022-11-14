import ArrowBack from '../../assets/ArrowBack.svg';
import ArrowBackDark from '../../assets/ArrowBackDark.svg';
import StepLine from '../StepLine';
import { useState } from 'react';

const TermsAndConditions = ({ closeModal, getStep, next }) => {
  const [isChecked, setIsChecked] = useState(false);

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
          <h1 className="flex justify-center pb-[20px]">
            Terms And Conditions
          </h1>
          <button
            className="flex pb-[10px] items-center justify-start"
            onClick={() => closeModal()}
          >
            <img src={ArrowBackDark} className="flex" alt="arrow" />
            <span className="font-normal text-[16px] leading-[20px] pl-[5px]">
              Go Back
            </span>
          </button>
          <div className="flex flex-col px-[70px] pt-[37px] justify-between h-[461px] bg-dark rounded-[10px]">
            <div className="border-b-[2px] border-solid border-primary mb-[15px] flex flex-col">
              <span className="font-bold leading-[152%] text-[18px] text-white">
                Terms And Conditions
              </span>
            </div>
            <div className="text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
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
            <div className="self-center flex pb-[30px] flex-col">
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
          </div>
        </div>
        <div className="flex items-center justify-center w-[754px] h-[100px]">
          <StepLine step={getStep()} />
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
