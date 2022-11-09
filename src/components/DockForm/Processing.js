import Loader from '../Loader';

const Processing = () => {
  return (
    <div className="flex m-auto pt-[50px]" key={"processing"}>
      <div className="flex flex-col">
        <h1 className="flex justify-center pt-[70px] pb-[20px]">Processing...</h1>
        <div className="flex flex-col pt-[37px] px-[70px] mx-auto justify-start w-[754px] h-[400px] bg-dark rounded-[10px]">
          <div className="border-b-[2px] border-solid border-primary mb-[15px] flex flex-col">
            <span className="font-bold leading-[152%] text-[18px] text-white">
              Spaceport is docking ... DO NOT CLOSING THIS SCREEN
            </span>
          </div>
          <div className="flex text-[14px] leading-[152%] font-normal text-white justify-center">
            Transferring keys and verifying assets to port over ...
          </div>
          <div className="pb-[42px]">
            <Loader />
          </div>
          <div className="flex text-white font-bold text-[14px] leading-[152%] pt-[30px] pb-[81px] justify-center">
            Time Remaining:
            <span className="text-white font-normal pl-[5px] text-[14px] leading-[152%]">Approximately 2 minutes</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Processing;
