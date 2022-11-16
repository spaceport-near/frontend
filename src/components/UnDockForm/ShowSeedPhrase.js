import { useState } from 'react';
import StepWrapper from '../StepWrapper';
import ArrowBackDark from '../../assets/ArrowBackDark.svg';
import rect from '../../assets/rect.svg';

const ShowSeedPhrase = ({ stepSettings, seedPhrase, next }) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <StepWrapper {...stepSettings}>
      <span className="text-white text-[18px] leading-[152%] font-normal">
        Be sure to record this phrase and store it somewhere safe. If you lose
        it you will not be able to access your wallet!
      </span>
      <div className="flex flex-col mx-[40px] p-2 border-[2px] border-primary rounded-[5px] h-[130px] gap-x-[20px] gap-y-[5px] flex-wrap justify-center ">
        {seedPhrase.split(' ').map((word, id) => (
          <span
            className="text-white text-[12px] leading-[152%] font-bold w-[100px] pb-[7px] flex gap-x-[12px]"
            key={word + id}
          >
            {id + 1}
            <span
              key={word + id}
              className="text-white text-[16px] leading-[152%] font-bold"
            >
              {word}
            </span>
          </span>
        ))}
      </div>
      <div className="flex flex-row justify-between items-center gap-x-2">
        <div className=" w-[180px]" />
        <button
          className="flex w-[180px] border-primary border-[2px] rounded-[5px] px-[33px] py-[7px] text-white flex items-center gap-x-[5px] h-[50px] hover:bg-darkLight"
          onClick={() => {
            navigator.clipboard.writeText(seedPhrase);
            setIsCopied(true);
          }}
        >
          <div className="flex">
            <img
              src={rect}
              alt="icon"
              className="relative bottom-[4px] left-[14px]"
            />
            <img src={rect} alt="icon" className="" />
          </div>
          {isCopied ? 'COPIED' : 'COPY'}
        </button>
        <button
          className="flex w-[180px] items-center justify-center text-[18px] h-[42px] px-[60px] bg-primary rounded-[4px] hover:bg-primaryLight disabled:bg-primaryLight"
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
    </StepWrapper>
  );
};

export default ShowSeedPhrase;
