import { useState } from 'react';
import ArrowBackDark from '../../assets/ArrowBackDark.svg';

const Confirm = ({ next }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="w-[754px]">
          <h1 className="flex justify-center pb-[20px]">
            Confirm you have secured your wallet
          </h1>
          <div className="flex flex-col px-[70px] pt-[37px] justify-between h-[461px] bg-dark rounded-[10px]">
            <div className="border-b-[2px] border-solid border-primary mb-[15px] flex flex-col">
              <span className="font-bold leading-[152%] text-[18px] text-white">
                Confirm undocking
              </span>
            </div>
            <div className="text-white text-[24px]">
              Do you confirm that you've done all the steps to secure your
              account?
            </div>
            <div className="flex items-center gap-[13px] text-center ">
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
              <span className="font-normal text-white text-[18px] leading-[152%]">
                I understand that Spaceport is no longer responsible for my
                wallet.
              </span>
            </div>
            <div className="self-center flex pb-[30px] flex-col">
              <button
                className="flex items-center justify-center text-[18px] m-auto h-[42px] px-[60px] bg-primary rounded-[4px] hover:bg-primaryLight disabled:bg-primaryLight"
                disabled={!isChecked}
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

export default Confirm;
