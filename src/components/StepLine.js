import React from 'react';
import rocket from '../assets/rocketUndock.svg';

const StepLine = ({ step }) => {
  return (
    <div>
      <div className=" flex items-center relative">
        {step === 0 && (
          <>
            <img src={rocket} alt="rocket" />
            <div className="w-[23px] h-[23px] rounded-[50%] border-[3px] border-solid border-black absolute left-[11px] bg-theme-blue" />
          </>
        )}
        {step === 1 && (
          <>
            <div className="w-[23px] h-[23px] rounded-[50%] border-[3px] border-solid border-black bg-black" />
            <img src={rocket} alt="rocket" className="absolute left-[195px]" />
            <div className="w-[23px] h-[23px] rounded-[50%] border-[3px] border-solid border-black bg-theme-blue absolute left-[207px]" />
          </>
        )}
        {step === 2 && (
          <>
            <div className="w-[23px] h-[23px] rounded-[50%] border-[3px] border-solid border-black bg-black" />
            <div className="w-[23px] h-[23px] rounded-[50%] border-[3px] border-solid border-black bg-black absolute left-[206px]" />
            <div className="w-[23px] h-[23px] rounded-[50%] border-[3px] border-solid border-black bg-black absolute left-[415px]" />
            <img src={rocket} alt="rocket" className="absolute left-[607px]" />
            <div className="w-[23px] h-[23px] rounded-[50%] border-[3px] border-solid border-black bg-theme-blue absolute left-[620px]" />
          </>
        )}
        <div className="w-[184px] border-[2px] border-solid border-black" />
        <div className="w-[23px] h-[23px] rounded-[50%] border-[3px] border-solid border-black " />
        <div className="w-[184px] border-[2px] border-solid border-black" />
        <div className="w-[23px] h-[23px] rounded-[50%] border-[3px] border-solid border-black " />
        <div className="w-[184px] border-[2px] border-solid border-black" />
        <div className="w-[23px] h-[23px] rounded-[50%] border-[3px] border-solid border-black " />
      </div>
    </div>
  );
};

export default StepLine;
