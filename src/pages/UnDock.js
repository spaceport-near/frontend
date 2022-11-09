import { useState } from 'react';
import Modal from '../components/Modal';
import useMultistepForm from '../hooks/useMultistepForm';
import TermsAndConditions from '../components/UnDockForm/TermsAndConditions';

export const UndockData = {
  list1: [
    ' Creating your own NEAR wallet',
    'Transferring your assets to the wallet',
    ' Launching away from SPACEPORT to explore on your own- this meansyou will be responsible for your PRIVATE KEY. No one will be abl to help you recover your wallet if anything happens!',
  ],
  list2:['Initiate and fund launch','Transferring of assets','Confirm undock'],
};

const UnDock = () => {
  const [openModal, setOpenModal] = useState(false);
  const getCurrentStep = () => currentStepIndex;

  const { step, currentStepIndex } = useMultistepForm([
    <TermsAndConditions setOpenModal={setOpenModal} getStep={getCurrentStep}/>
  ])


  console.log('currentStepIndex', currentStepIndex);

  return (
    <div className="flex flex-col gap-y-[23px] borderSecondary border-theme-blue px-[42px] py-[34px]  ">
      <div className="border-b-[2px] border-theme-blue border-solid">
        <span className="font-bold text-[18px] leading-[27px]">Undocking Your SPACEPORT Account</span>
      </div>
      <div className="flex flex-col gap-y-[25px]">
        <p className="font-normal text-[18px] leading-[27px]">
          SPACEPORT allows users to connect to dApps and services in the NEAR
          ecosystem from a secure and simple entry point. However, once you are
          ready to fly on your own you may UNDOCK your SPACEPORT account and
          head out on your own!
        </p>
        <div>
          <p>Effectively you will be doing the following:</p>
          <ul className="pl-[25px]">
            {UndockData.list1.map((item, index) => (
              <li key={index} className="pt-[5px] list-disc">
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-y-[12px]">
        <span className="font-bold text-[18px] leading-[27px]">So are you ready to fly alone?</span>
        <div>
          <span>Launch Sequence:</span>
          <ul className="pl-[25px]">
            {UndockData.list2.map((item, index) => (
              <li key={index} className="pt-[5px] list-disc">
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        className="m-auto w-[400px] h-[42px] bg-primary rounded-[4px] hover:bg-primaryLight"
        type="button"
        onClick={() => setOpenModal(true)}>
        Proceed to Terms & Conditions
      </button>
      {openModal &&
        <Modal open={openModal} setOpen={setOpenModal}>
          { step }
        </Modal>}
    </div>
  )
}

export default UnDock;
