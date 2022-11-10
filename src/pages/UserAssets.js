import TableItem from '../components/TableItem';

const UserAssets = () => {
  return (
    <div>
      <div className="p-[40px] h-full bg-[#fff]">
        <span className="text-[#000] font-bold  text-[18px] leading-[22px]">
          My Assets
        </span>
        <div className="w-[527px] border-t-[2px] border-solid border-[#78ded4] mt-[6px]"></div>
        <div className="flex flex-col gap-y-[10px] mt-[20px] rounded-[4px] border-solid border-[2px] border-[#78ded4] pt-[20px] pb-[34px] pl-[26px] pr-[0px]">
          <span className="text-[#000] font-bold  text-[14px] leading-[18px]">
            My Balance
          </span>
          <span className="text-[#000] font-bold  text-[36px] leading-[45px]">
            $694.00 USD
          </span>
        </div>
        <div className="flex flex-col mt-[35px]">
          <div className="flex pl-[26px] pb-[6px]">
            <div className="font-normal text-[18px] leading-[22px]">Name</div>
            <div className="font-normal text-[18px] leading-[22px] mr-[50px] ml-[177px]">
              Price
            </div>
            <div className="font-normal text-[18px] leading-[22px]">
              Balance
            </div>
          </div>
          <div>
            <TableItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAssets;
