import error from '../../assets/error.svg';
import ArrowBack from '../../assets/ArrowBack.svg';

const DockingFailed = ({ setOpenModal }) => {
  return (
    <div className="h-screen" key={'processing'}>
      <div className="flex justify-start pt-[18px] pb-[20px]">
        <button
          onClick={() => setOpenModal(false)}
          className="flex items-center text-center border-solid border-red rounded-[5px] border-[2px] gap-x-[15px] py-[6px] w-[292px] justify-center"
        >
          <img src={ArrowBack} alt="arrow" />
          <span className="font-normal text-[18px] leading-[22px]">
            Exit Docking Sequence
          </span>
        </button>
      </div>
      <div className="px-[80px] py-[20px]">
        <h1 className="flex justify-center pt-[10px] pb-[20px]">
          Error: Docking Failed
        </h1>
        <div className="flex flex-col pt-[37px] px-[70px] mx-auto justify-start w-[754px] h-[400px] bg-dark rounded-[10px]">
          <div className="border-b-[2px] border-solid border-primary mb-[15px] flex flex-col">
            <span className="font-bold leading-[152%] text-[18px] text-white text-center">
              Spaceport is docking. DO NOT CLOSE THIS SCREEN.
            </span>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default DockingFailed;
