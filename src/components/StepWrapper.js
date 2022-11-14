import ArrowBack from '../assets/ArrowBack.svg';
import ArrowBackDark from '../assets/ArrowBackDark.svg';
import StepLine from './StepLine';

const StepWrapper = ({
  showExitButton,
  closeHandler,
  showGoBackButton,
  goBackButtonHandler,
  showSteps,
  title,
  subTitle,
  step,
  children,
}) => {
  return (
    <div className="h-screen">
      <div className="py-[20px] h-[78px]">
        {showExitButton && (
          <button
            onClick={closeHandler}
            className="flex items-center text-center bg-white border-solid border-red rounded-[5px] border-[2px] gap-x-[15px] py-[6px] w-[292px] justify-center hover:shadow-md hover:shadow-red"
          >
            <img src={ArrowBack} alt="arrow" />
            <span className="font-normal text-[18px] leading-[22px]">
              Exit Docking Sequence
            </span>
          </button>
        )}
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="w-[754px]">
          <h1 className="flex justify-center pb-[20px] text-center">{title}</h1>
          {showGoBackButton && (
            <button
              className="flex pb-[10px] items-center justify-start"
              onClick={goBackButtonHandler}
            >
              <img src={ArrowBackDark} className="flex" alt="arrow" />
              <span className="font-normal text-[16px] leading-[20px] pl-[5px]">
                Go Back
              </span>
            </button>
          )}
          <div className="flex flex-col px-[70px] py-[35px] justify-between h-[400px] bg-dark rounded-[10px]">
            <div className="border-b-[2px] border-solid border-primary mb-[15px] flex flex-col">
              <span className="font-bold leading-[152%] text-[18px] text-white">
                {subTitle}
              </span>
            </div>
            {children}
          </div>
        </div>
        {showSteps && (
          <div className="flex items-center justify-center w-[754px] h-[100px]">
            <StepLine step={step} />
          </div>
        )}
      </div>
    </div>
  );
};

export default StepWrapper;
