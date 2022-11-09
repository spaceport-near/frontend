const LastStep = ({ closeModal }) => {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center items-center gap-2 pt-[160px]">
        <div className="w-[754px]">
          <div className="flex flex-col px-[70px] pt-[37px] justify-between h-[300px] bg-dark rounded-[10px]">
            <div className="border-b-[2px] border-solid border-primary mb-[15px] flex flex-col">
              <span className="font-bold leading-[152%] text-[18px] text-white">
                Good luck, cryptonaut!
              </span>
            </div>
            <div className="text-white">
              See you in the NEARverse!
            </div>
            <div className='self-center flex pb-[30px] flex-col'>
              <button className="flex items-center justify-center text-[18px] m-auto h-[42px] px-[60px] bg-primary rounded-[4px] hover:bg-primaryLight disabled:bg-primaryLight" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LastStep;
