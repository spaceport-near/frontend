import { useEffect, useState } from 'react';
import StepWrapper from '../StepWrapper';
import ArrowBackDark from '../../assets/ArrowBackDark.svg';

const ValidateSeed = ({ stepSettings, seedPhrase, next }) => {
  const [randomNumber, setRandomNumber] = useState(1);
  const [wordExist, setWordExist] = useState(false);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * (12 - 1 + 1) + 1));
  }, []);

  const handlePhrase = (e) => {
    const inputSymbol = e.target.value;
    const res = seedPhrase
      .split(' ')
      .find(
        (word, index) => word === inputSymbol && index + 1 === randomNumber
      );
    setWordExist(!!res);
  };

  return (
    <StepWrapper {...stepSettings}>
      <div className="justify-between h-full">
        <div className="items-start">
          <span className="text-[18px] leading-[152%] font-normal text-white ">
            Please enter the
          </span>
          <span className="text-[18px] leading-[152%] font-bold text-white ">
            {' '}
            {randomNumber}th word
          </span>
        </div>
        <div className="flex justify-center w-full pt-[50px]">
          <input
            type="text"
            className="w-[300px] h-[36px] bg-white rounded-[5px] p-2"
            onChange={handlePhrase}
          />
        </div>
      </div>
      <div className="flex flex-col self-center pt-[26px]">
        <button
          className="flex items-center justify-center text-[18px] m-auto h-[42px] px-[60px] bg-primary rounded-[4px] hover:bg-primaryLight disabled:bg-primaryLight"
          onClick={next}
          disabled={!wordExist}
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

export default ValidateSeed;
