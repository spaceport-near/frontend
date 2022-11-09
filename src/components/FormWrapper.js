import ArrowBack from '../assets/ArrowBack.svg';

const FormWrapper = ({title, children}) => {
  return (
  <div className="flex flex-col w-full min-h-full">
    <div className="flex justify-start pt-[18px] pb-[60px]">
      <button  onClick={() => setOpenModal(false)} className='flex items-center text-center border-solid border-red rounded-[5px] border-[2px] gap-x-[15px] py-[6px] w-[292px] justify-center'>
        <img src={ArrowBack} alt='arrow' />
        <span className='font-normal text-[18px] leading-[22px]'>Exit Docking Sequence </span>
      </button>
    </div>
    <div className="flex flex-col items-center min-h-full ">
      <h1>{title}</h1>
      <div className="flex py-[20px]">Go Back</div>
      <div className="flex flex-col px-[70px] mx-auto justify-center w-[754px] h-[400px] bg-dark rounded-[10px]">
        {children}
      </div>
    </div>
  </div>
  )
}

export default FormWrapper;
