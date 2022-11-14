import ArrowBackDark from '../../assets/ArrowBackDark.svg';

const InstructionStepOne = ({ next }) => {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="w-[754px]">
          <h1 className="flex justify-center text-center pb-[20px]">
            Instructions to Enable Passphrase on your new account
          </h1>
          <div className="flex flex-col px-[70px] pt-[37px] justify-between h-[461px] bg-dark rounded-[10px]">
            <div className="border-b-[2px] border-solid border-primary mb-[15px] flex flex-col">
              <span className="font-bold leading-[152%] text-[18px] text-white">
                Follow this steps to enable the passphrase on your NEAR account
              </span>
            </div>
            <div className="text-white">Select the account tab</div>
            <div className="self-center flex pb-[30px] flex-col">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionStepOne;
