import { useState } from 'react';
import { unDockAccount } from '../services/api';
import useMultistepForm from '../hooks/useMultistepForm';
import Modal from '../components/Modal';
import ShowSeedPhrase from '../components/UnDockForm/ShowSeedPhrase';
import ValidateSeed from '../components/UnDockForm/ValidateSeed';
import DockingFailed from '../components/DockForm/DockingFailed';
import TermsAndConditions from '../components/UnDockForm/TermsAndConditions';
import ConfirmUndocking from '../components/UnDockForm/ConfirmUndocking';
import UnDockAccountSelection from '../components/UnDockForm/UnDockAccountSelection';
import Processing from '../components/DockForm/Processing';
import InstructionStepOne from '../components/UnDockForm/InstructionStepOne';
import InstructionStepTwo from '../components/UnDockForm/InstructionStepTwo';
import Confirm from '../components/UnDockForm/Confirm';
import UndockingSuccessful from '../components/UnDockForm/UndockingSuccessful';
import LastStep from '../components/UnDockForm/LastStep';

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
  const [userAccounts, setUserAccounts] = useState(null);
  const [seedPhrase, setSeedPhrase] = useState(null);

  const gotoNext = () => next();

  const goBack = () => back();

  const closeModal = () => {
    resetSteps();
    setOpenModal(false);
  };

  const handleUnDockAccount = () => {
    goTo(5);
    unDockAccount(selectedAccount)
      .then((data) => {
        window.open('https://wallet.testnet.near.org/', '_blank');
        goTo(6);
      })
      .catch((e) => {
        goTo(11);
        console.log('Error Dock Account', e);
      });
  };

  const getSeedPhraseByAcc = () => {
    const accForUndock = userAccounts.find(
      (acc) => acc.accountId === selectedAccount
    );
    setSeedPhrase(accForUndock.seedKey.seed);
    goTo(3);
  };

  // TODO need for tests, remove it
  // const goNextStep = () => {
  //   goTo(5);
  //   setTimeout(() => goTo(6), 2000);
  // };

  const { step, back, next, resetSteps, goTo } = useMultistepForm([
    <TermsAndConditions
      stepSettings={{
        showExitButton: true,
        closeHandler: () => closeModal(),
        showGoBackButton: true,
        goBackButtonHandler: () => closeModal(),
        title: 'Terms And Conditions',
        subTitle: 'Terms And Conditions',
        showSteps: true,
        step: 0,
      }}
      closeModal={closeModal}
      next={gotoNext}
    />,
    <UnDockAccountSelection
      stepSettings={{
        showExitButton: true,
        closeHandler: () => closeModal(),
        showGoBackButton: true,
        goBackButtonHandler: () => goBack(),
        title: 'Account Selection',
        subTitle: 'Select the account you wish to Undock',
        showSteps: true,
        step: 1,
      }}
      next={gotoNext}
      selectedAccount={selectedAccount}
      setSelectedAccount={setSelectedAccount}
      userAccounts={userAccounts}
      setUserAccounts={setUserAccounts}
    />,
    <ConfirmUndocking
      stepSettings={{
        showExitButton: true,
        closeHandler: () => closeModal(),
        showGoBackButton: true,
        goBackButtonHandler: () => goBack(),
        title: 'Confirm Undocking',
        subTitle: `Confirm transfer of assets from ${selectedAccount}`,
        showSteps: true,
        step: 2,
      }}
      selectedAccount={selectedAccount}
      handleNextButton={getSeedPhraseByAcc}
    />,
    <ShowSeedPhrase
      stepSettings={{
        showExitButton: false,
        showGoBackButton: false,
        title: 'Undocking you account...',
        subTitle: `Your New Seed Phrase for ${selectedAccount}`,
        showSteps: false,
        step: 3,
      }}
      seedPhrase={seedPhrase}
      next={gotoNext}
    />,
    <ValidateSeed
      stepSettings={{
        showExitButton: false,
        showGoBackButton: false,
        title: 'Undocking you account...',
        subTitle: `Your New Seed Phrase for ${selectedAccount}`,
        showSteps: false,
        step: 4,
      }}
      seedPhrase={seedPhrase}
      next={handleUnDockAccount}
    />,
    <Processing
      stepSettings={{
        showExitButton: false,
        showGoBackButton: false,
        title: 'Processing...',
        subTitle: `Spaceport is undocking ${selectedAccount}. DO NOT CLOSE THIS SCREEN.`,
        showSteps: false,
        step: 5,
      }}
    />,
    <InstructionStepOne
      stepSettings={{
        showExitButton: false,
        showGoBackButton: false,
        title: 'Instructions to Enable Passphrase on your new account',
        subTitle: `Follow this steps to enable the passphrase on your NEAR account`,
        showSteps: false,
        step: 6,
      }}
      next={gotoNext}
    />,
    <InstructionStepTwo
      stepSettings={{
        showExitButton: false,
        showGoBackButton: false,
        title: 'Instructions to Enable Passphrase on your new account',
        subTitle: `Follow this steps to enable the passphrase on your NEAR account`,
        showSteps: false,
        step: 7,
      }}
      next={gotoNext}
    />,
    <Confirm
      stepSettings={{
        showExitButton: false,
        showGoBackButton: false,
        title: 'Confirm you have secured your wallet',
        subTitle: 'Confirm undocking',
        showSteps: false,
        step: 8,
      }}
      next={gotoNext}
    />,
    <UndockingSuccessful
      stepSettings={{
        showExitButton: false,
        showGoBackButton: false,
        title: 'Undocking Successful',
        subTitle: `Spaceport has undocking ${selectedAccount}`,
        showSteps: false,
        step: 9,
      }}
      next={gotoNext}
    />,
    <LastStep closeModal={closeModal} />,
    <DockingFailed
      stepSettings={{
        showExitButton: true,
        closeHandler: () => closeModal(),
        showGoBackButton: false,
        title: 'Error: Docking Failed',
        subTitle: 'Spaceport is docking. DO NOT CLOSE THIS SCREEN.',
        showSteps: false,
        step: 11,
      }}
    />,
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
