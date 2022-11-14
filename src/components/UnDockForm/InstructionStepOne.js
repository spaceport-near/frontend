import StepWrapper from '../StepWrapper';
import ArrowBackDark from '../../assets/ArrowBackDark.svg';

const InstructionStepOne = ({ stepSettings, next }) => {
  return (
    <StepWrapper {...stepSettings}>
      <div className="text-white">Select the account tab</div>
      <div className="text-white">IMG 1</div>
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
