const Dock = () => {
  return (
    <div className="borderSecondary flex flex-col gap-y-[23px] px-[42px] py-[34px]">
      <div className="border-b-[2px] border-solid border-theme-blue">
        <span className="font-bold text-[18px] leading-[22px]">
          Dock an Account to Spaceport
        </span>
      </div>
      <p className="font-normal text-[18px] leading-[150%]">
        SPACEPORT allows users to seamlessly connect to dApps and services in
        the NEAR ecosystem from a secure and simple entry point. If you would
        like to add an existing NEAR account to your Spaceport account, proceed
        below.{' '}
        <span className="font-bold text-[18px] leading-[150%]">
          Docking only works with a passphrase (seed phrase).
        </span>
      </p>
      <div className="flex flex-col gap-y-[15px] borderPrimary px-[27px] pt-[25px] pb-[42px] ">
        <div>
          <span className="font-bold text-[18px] leading-[22px]">ATTENTION:</span>{' '}
          <span className="font-normal text-[18px] leading-[150%]">
            Docking process will delete all security & recovery options
          </span>
        </div>
        <div className="flex items-center gap-x-[13px] text-center">
          <span className="font-normal text-[18px] leading-[150%]">
            I understand and wish to proceed
          </span>
        </div>
      </div>
    </div>
  )
}

export default Dock;
