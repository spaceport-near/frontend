const DockingSuccessful = ({ closeModal }) => {
  return (
    <div className="h-screen" key={'processing'}>
      <div className="px-[80px] py-[20px]">
        <h1 className="flex justify-center pt-[70px] pb-[20px]">
          Docking Successful
        </h1>
        <div className="flex flex-col pt-[37px] px-[70px] mx-auto justify-start w-[754px] h-[400px] bg-dark rounded-[10px]">
          <div className="border-b-[2px] border-solid border-primary mb-[15px] flex flex-col">
            <span className="font-bold leading-[152%] text-[18px] text-white">
              Welcome to Spaceport!
            </span>
          </div>
          <div className="flex text-[14px] leading-[152%] font-normal text-white justify-center">
            All assets for account.near have been successfully transferred.
          </div>
          <div className="flex flex-col mx-auto items-center justify-center py-[30px]">
            <p className="text-primary">icon</p>
            <span className="text-primary font-bold text-[14] leading-[152%]">
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
        </div>
      </div>
    </div>
  );
};

export default DockingSuccessful;
