import ArrowBackDark from '../../assets/ArrowBackDark.svg';
import StepWrapper from '../StepWrapper';
import ok from '../../assets/ok.svg';

const UndockingSuccessful = ({ stepSettings, next }) => {
  return (
    <StepWrapper {...stepSettings}>
      <div className="flex text-[14px] leading-[152%] font-normal text-white justify-center">
        Your account is now secure.
      </div>
      <div className="flex flex-col mx-auto items-center justify-center py-[30px]">
        <img src={ok} alt="ok" />
        <span className="text-primary font-bold text-[14] leading-[152%] pt-[20px]">
          Undocking Successful
        </span>
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

export default UndockingSuccessful;
