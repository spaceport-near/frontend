import React from 'react';

const RadioButton = ({ id, value, label, setSelect, selected }) => {
  const isSelectedButton = (value) => selected === value;

  const handleSelected = (e) => {
    setSelect(e.currentTarget.value);
  };

  const addEllipsis = (string) => {
    const maxLength = 20;
    if (string.length > maxLength) {
      return string.slice(0, maxLength) + '...';
    }
    return string;
  };

  return (
    <div
      className={
        isSelectedButton(value)
          ? 'flex items-center text-center border border-primary rounded-[4px] py-[12px] w-[285px] gap-x-[23px] pl-[17px] bg-opacity-40 bg-primary'
          : 'flex items-center text-center border border-primary rounded-[4px] py-[12px] w-[285px] gap-x-[23px] pl-[17px]'
      }
    >
      <label className="flex items-center text-center gap-x-[23px] pl-[17px]">
        <input
          type="radio"
          id={id}
          value={value}
          name="account"
          onChange={handleSelected}
          checked={isSelectedButton(value)}
          className="w-[19px] h-[19px] accent-[#000000]"
        />
        <p className="font-bold text-[18px] leading-[152%] text-white">
          {addEllipsis(label)}
        </p>
      </label>
    </div>
  );
};

export default RadioButton;
