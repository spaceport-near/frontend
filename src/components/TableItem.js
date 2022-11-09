import React from 'react';
import nearIcon from '../assets/near.svg';
import dollarIcon from '../assets/dollar.svg';

export  const myAssetsTableData = [
  {
    icon: nearIcon,
    name:'NEAR',
    label:'NEAR',
    price:'3.40',
    balance:'135',
    currency:'459.00'
  },
  {
    icon: dollarIcon,
    name:'USD',
    label:'',
    price:'1.00',
    balance:'135',
    currency:'135.00'
  },
  {
    icon: nearIcon,
    name:'OCTOPUS',
    label:'OCT',
    price:'1.60',
    balance:'100',
    currency:'160.00'
  },
]

const TableItem = () => {
  return (
    <div className="flex flex-col gap-y-[15px]">
      {myAssetsTableData.map((item,index) => (
        <div key={index} className="flex items-center justify-between primaryBorder pt-[21px] pr-[13px] pb-[19px] pl-[24px] ">
          <div className="flex items-center">
            <div className="flex items-center w-[225px] gap-x-[16px]">
              <div className="flex items-center justify-center w-[50px] h-[50px] rounded-[50%] bg-[#78ded4]">
                <img src={item.icon} alt="icon" className="block" />
              </div>
              <div>
                <p className="font-bold  text-[18px] leading-[22px]">{item.name}</p>
                <p className="font-normal  text-[16px] leading-[20px]">{item.label}</p>
              </div>
            </div>
            <p className="font-bold  text-[18px] leading-[22px]">${item.price}</p>
            <div className="flex flex-col ml-[44px]">
              <span className="font-bold  text-[18px] leading-[22px]">{item.balance}</span>
              <span className="font-normal  text-[14px] leading-[18px]">
                ≈ ${item.currency}
              </span>
            </div>
          </div>
          <div className="flex gap-x-[25px]">
            {item.price === '1.00' ? (
              <button className="bg-primary py-[10px] px-[25px] rounded-[4px] hover:bg-primaryLight" onClick={() => console.log('+ Add Funds')}>+ Add Funds</button>
            ) : (
              <>
                <button className="bg-primary py-[10px] px-[18px] rounded-[4px] hover:bg-primaryLight" onClick={() => console.log('send')}>Send</button>
                <button className="bg-primary py-[10px] px-[18px] rounded-[4px] hover:bg-primaryLight" onClick={() => console.log('receive')}>Receive</button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableItem;
