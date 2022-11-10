import ArrowBack from '../../assets/ArrowBack.svg';

const DockingFailed = () => {
  return (
    <div className="flex flex-col w-full min-h-full" key={'processing'}>
      <div className="flex justify-start pt-[18px] pb-[60px]"></div>
      <div className="flex flex-col items-center min-h-full ">
        <h1 className="pt-[80px] pb-[20px]">Error: Docking Failed</h1>
        <div className="flex flex-col px-[70px] mx-auto justify-center w-[754px] h-[400px] bg-dark rounded-[10px]"></div>
      </div>
    </div>
  );
};

export default DockingFailed;
