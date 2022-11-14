import Loader from '../Loader';
import StepWrapper from '../StepWrapper';

const Processing = ({ stepSettings }) => {
  return (
    <StepWrapper {...stepSettings}>
      <>
        <div className="flex text-[14px] leading-[152%] font-normal text-white justify-center">
          Transferring keys and verifying assets to port over ...
        </div>
        <div className="pb-[42px]">
          <Loader />
        </div>
        <div className="flex text-white font-bold text-[14px] leading-[152%] pt-[30px] pb-[81px] justify-center">
          Time Remaining:
          <span className="text-white font-normal pl-[5px] text-[14px] leading-[152%]">
            Approximately 2 minutes
          </span>
        </div>
      </>
    </StepWrapper>
  );
};

export default Processing;
