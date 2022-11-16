import StepWrapper from '../StepWrapper';
import ArrowBackDark from '../../assets/ArrowBackDark.svg';
import ScreenShot1 from '../../assets/ScreenShot1.png';

const InstructionStepOne = ({ stepSettings, next }) => {
  return (
    <StepWrapper {...stepSettings}>
      <div className="text-white">Select the Account tab</div>
      <div className="">
        <img src={ScreenShot1} alt="screen-one" />
      </div>
      <div className="flex flex-col self-center pt-[26px]">
        <button
          className="flex items-center justify-center text-[18px] m-auto h-[42px] px-[60px] bg-primary rounded-[4px] hover:bg-primaryLight disabled:bg-primaryLight"
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

export default InstructionStepOne;
