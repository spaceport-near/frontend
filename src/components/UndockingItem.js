import React from 'react';

const UndockingItem = ({ name, label, amount }) => {
  return (
    <div className="flex border-b-[1px] border-solid border-theme-blue pb-[10px] w-full items-center text-center ">
      <div className="flex gap-x-[10px] items-center text-center w-[157px]">
        <span className="text-white font-bold text-[18px] leading-[22px]">
          {name}
        </span>
        <span className="text-white font-normal text-[12px] leading-[15px]">
          {label}
        </span>
      </div>
      <span className="text-white font-bold text-[18px] leading-[22px]">
        {amount}
      </span>
    </div>
  );
};

export default UndockingItem;
