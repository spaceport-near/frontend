import StepWrapper from '../StepWrapper';
import ok from '../../assets/ok.svg';

const DockingSuccessful = ({ stepSettings, closeModal }) => {
  return (
    <StepWrapper {...stepSettings}>
      <div className="flex text-[14px] leading-[152%] font-normal text-white justify-center">
        All assets for account.near have been successfully transferred.
      </div>
      <div className="flex flex-col mx-auto items-center justify-center py-[30px]">
        <img src={ok} alt="ok" />
        <span className="text-primary font-bold text-[14] leading-[152%] pt-[10px]">
          Docking Successful
        </span>
      </div>
      <div className="flex pt-[30px] pb-[81px] justify-center">
        <button
          type="button"
          className="flex items-center justify-center m-auto h-[42px] px-[20px] bg-primary rounded-[4px] hover:bg-primaryLight disabled:bg-primaryLight"
          onClick={closeModal}
        >
          Go To Spaceport Home
        </button>
      </div>
    </StepWrapper>
  );
};

export default DockingSuccessful;
