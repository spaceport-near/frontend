import { useState } from 'react';
import ArrowBack from '../../assets/ArrowBack.svg';
import ArrowBackDark from '../../assets/ArrowBackDark.svg';

const AccountSelection = ({
  setOpenModal,
  phrase,
  handleChangePhrase,
  handleDockAccount,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-col w-full min-h-full" key={'account_selection'}>
      <div className="flex justify-start pt-[18px] pb-[60px]">
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
      <div className="flex flex-col min-h-full">
        <div className="flex flex-col w-[754px] mx-auto justify-center">
          <h1 className="flex justify-center pb-[20px]">Account Selection</h1>
          <button
            className="flex pb-[10px] items-center justify-start"
            onClick={() => setOpenModal(false)}
          >
            <img src={ArrowBackDark} className="flex" alt="arrow" />
            <span className="font-normal text-[16px] leading-[20px] pl-[5px]">
              Go Back
            </span>
          </button>
          <div className="flex flex-col px-[70px] justify-center h-[400px] bg-dark rounded-[10px]">
            <div className="border-b-[2px] border-solid border-primary mb-[15px] flex flex-col">
              <span className="font-bold leading-[152%] text-[18px] text-white">
                Enter address of the account you with to Dock
              </span>
            </div>
            <span className="text-[14px] leading-[152%] font-normal text-white">
              Type your 12 word recovery phrase, then click below to begin the
              recovery process.
            </span>
            <div className="pt-[20px] pb-[42px]">
              <textarea
                placeholder="Enter seed phrase"
                className="w-full h-[80px] bg-[#353535] px-[11px] py-[6px] text-start text-[#B1B1B1] resize-none"
                autoComplete="off"
                autoCapitalize="off"
                value={phrase}
                onChange={handleChangePhrase}
              />
            </div>
            <div className="flex gap-x-[10px] items-start">
              <div className="flex h-5 items-center">
                <input
                  id="comments"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-3 border-dark focus:ring-primary"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
              </div>
              <span className="text-[18] text-white leading-[152%] font-normal">
                I want to grant full access and transfer all assets to SPACEPORT
                from the selected account.
              </span>
            </div>
            <div className="self-center flex pt-[26px] flex-col">
              <button
                className="flex items-center justify-center m-auto h-[42px] px-[20px] bg-primary rounded-[4px] hover:bg-primaryLight disabled:bg-primaryLight"
                disabled={!isChecked}
                onClick={handleDockAccount}
              >
                Dock Account
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

export default AccountSelection;
