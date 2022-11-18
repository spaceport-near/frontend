import StepWrapper from '../StepWrapper';
import ScreenShot2 from '../../assets/ScreenShot2.png';
import ArrowBackDark from '../../assets/ArrowBackDark.svg';

const InstructionStepTwo = ({ stepSettings, next }) => {
  return (
    <StepWrapper {...stepSettings}>
      <div className="text-white">
        Click on enable Passphrase and save it somewhere secure
      </div>
      <div className="flex justify-center">
        <img src={ScreenShot2} className="w-[180px]" alt="screen-two" />
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

export default InstructionStepTwo;
