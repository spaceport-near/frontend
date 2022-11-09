import ArrowBack from '../../assets/ArrowBack.svg';
import ArrowBackDark from '../../assets/ArrowBackDark.svg';
import StepLine from '../StepLine';

const TermsAndConditions = ({ setOpenModal, getStep }) => {

  return (
    <div className="h-screen">
      <div className="px-[80px] py-[20px]">
        <button  onClick={() => setOpenModal(false)} className='flex items-center text-center bg-white border-solid border-red rounded-[5px] border-[2px] gap-x-[15px] py-[6px] w-[292px] justify-center hover:shadow-md hover:shadow-red'>
          <img src={ArrowBack} alt='arrow' />
          <span className='font-normal text-[18px] leading-[22px]'>Exit Docking Sequence</span>
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 pt-[60px]">
        <div className="w-[754px]">
          <h1 className="flex justify-center pb-[20px]">Terms And Conditions</h1>
          <button className="flex pb-[10px] items-center justify-start" onClick={() => setOpenModal(false)}>
            <img src={ArrowBackDark} className="flex" alt='arrow' />
            <span className='font-normal text-[16px] leading-[20px] pl-[5px]'>Go Back</span>
          </button>
          <div className="flex flex-col px-[70px] justify-center h-[400px] bg-dark rounded-[10px]">

          </div>
        </div>
        <div className="flex items-center justify-center w-[754px] h-[100px]">
          <StepLine step={getStep()}/>
        </div>
      </div>
    </div>
  )
}

export default TermsAndConditions;
