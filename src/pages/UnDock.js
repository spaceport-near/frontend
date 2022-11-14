import { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import useMultistepForm from '../hooks/useMultistepForm';
import TermsAndConditions from '../components/UnDockForm/TermsAndConditions';
import ConfirmUndocking from '../components/UnDockForm/ConfirmUndocking';
import UnDockAccountSelection from '../components/UnDockForm/UnDockAccountSelection';
import Processing from '../components/DockForm/Processing';
import InstructionStepOne from '../components/UnDockForm/InstructionStepOne';
import InstructionStepTwo from '../components/UnDockForm/InstructionStepTwo';
import Confirm from '../components/UnDockForm/Confirm';
import UndockingSuccessful from '../components/UnDockForm/UndockingSuccessful';
import LastStep from '../components/UnDockForm/LastStep';
import { getAccount, getAccounts, unDockAccount } from '../services/api';

export const UndockData = {
  list1: [
    ' Creating your own NEAR wallet',
    'Transferring your assets to the wallet',
    ' Launching away from SPACEPORT to explore on your own- this meansyou will be responsible for your PRIVATE KEY. No one will be abl to help you recover your wallet if anything happens!',
  ],
  list2: [
    'Initiate and fund launch',
    'Transferring of assets',
    'Confirm undock',
  ],
};

const UnDock = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);

  const getCurrentStep = () => currentStepIndex;

  const gotoNext = () => next();

  const goBack = () => back();

  const closeModal = () => {
    resetSteps();
    setOpenModal(false);
  };

  const handleUnDockAccount = () => {
    goTo(3);
    // unDockAccount(selectedAccount)
    //   .then((data) => {
    //     console.log('data', data);
    //     window.open('https://wallet.testnet.near.org/', '_blank',)
    //     goTo(4);
    //   })
    //   .catch((e) => {
    //     goTo(3);
    //     console.log('Error Dock Account', e)
    //   });
    //setTimeout(() => goTo(4), 2000);
  };

  const getSeedPhraseByAcc = (accountId) => {
    getAccount(selectedAccount).then((account) =>
      console.log('account', account)
    );
  };

  const { step, back, currentStepIndex, next, resetSteps, goTo } =
    useMultistepForm([
      <TermsAndConditions
        closeModal={closeModal}
        getStep={getCurrentStep}
        next={gotoNext}
      />,
      <UnDockAccountSelection
        back={goBack}
        closeModal={closeModal}
        getStep={getCurrentStep}
        next={gotoNext}
        selectedAccount={selectedAccount}
        setSelectedAccount={setSelectedAccount}
      />,
      <ConfirmUndocking
        back={goBack}
        closeModal={closeModal}
        getStep={getCurrentStep}
        next={gotoNext}
        selectedAccount={selectedAccount}
        handleNextButton={getSeedPhraseByAcc}
      />,
      <Processing />,
      <InstructionStepOne next={gotoNext} />,
      <InstructionStepTwo next={gotoNext} />,
      <Confirm next={gotoNext} />,
      <UndockingSuccessful next={gotoNext} />,
      <LastStep closeModal={closeModal} />,
    ]);

  return (
    <div className="flex flex-col gap-y-[23px] borderSecondary border-theme-blue px-[42px] py-[34px]  ">
      <div className="border-b-[2px] border-theme-blue border-solid">
        <span className="font-bold text-[18px] leading-[27px]">
          Undocking Your SPACEPORT Account
        </span>
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
        <span className="font-bold text-[18px] leading-[27px]">
          So are you ready to fly alone?
        </span>
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
        onClick={() => setOpenModal(true)}
      >
        Proceed to Terms & Conditions
      </button>
      {openModal && (
        <Modal open={openModal} setOpen={setOpenModal}>
          {step}
        </Modal>
      )}
    </div>
  );
};

export default UnDock;
