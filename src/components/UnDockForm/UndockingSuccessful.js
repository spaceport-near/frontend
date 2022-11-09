import ArrowBackDark from '../../assets/ArrowBackDark.svg';

const UndockingSuccessful = ({ next }) => {
  return (
    <div className="h-screen" key={"processing"}>
      <div className="px-[80px] py-[20px]">
        <h1 className="flex justify-center pt-[70px] pb-[20px]">Undocking Successful</h1>
        <div className="flex flex-col pt-[37px] px-[70px] mx-auto justify-start w-[754px] h-[461px] bg-dark rounded-[10px]">
          <div className="border-b-[2px] border-solid border-primary mb-[15px] flex flex-col">
            <span className="font-bold leading-[152%] text-[18px] text-white">
             Spaceport has undocking account.near
            </span>
          </div>
          <div className="flex text-[14px] leading-[152%] font-normal text-white justify-center">
            Your account is now secure.
          </div>
          <div className="flex flex-col mx-auto items-center justify-center py-[30px]">
            <p className="text-primary">icon</p>
            <span className="text-primary font-bold text-[14] leading-[152%]">
              Undocking Successful
            </span>
          </div>
          <div className='self-center flex pb-[30px] flex-col'>
            <button className="flex items-center justify-center text-[18px] m-auto h-[42px] px-[60px] bg-primary rounded-[4px] hover:bg-primaryLight disabled:bg-primaryLight" onClick={next}>
              Next
              <img src={ArrowBackDark} alt="button" className="pr-[10px] rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UndockingSuccessful;
