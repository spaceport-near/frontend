import StepWrapper from '../StepWrapper';
import error from '../../assets/error.svg';

const DockingFailed = ({ stepSettings }) => {
  return (
    <StepWrapper {...stepSettings}>
      <>
        <div className="flex text-[14px] leading-[152%] font-normal text-white justify-center">
          Failed to transfer access keys
        </div>
        <div className="flex flex-col mx-auto items-center justify-center py-[30px]">
          <img src={error} alt="error" />
          <span className="text-red font-bold text-[14] leading-[152%] pt-[30px]">
            Docking Unsuccessful
          </span>
        </div>
        <div className="flex text-white font-bold text-[14px] leading-[152%] pt-[10px] justify-center">
          Time Remaining:
          <span className="text-white font-normal pl-[5px] text-[14px] leading-[152%]">
            Complete
          </span>
        </div>
      </>
    </StepWrapper>
  );
};

export default DockingFailed;
