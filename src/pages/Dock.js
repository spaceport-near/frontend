import { useState } from 'react';
import { dockAccount } from '../services/api';
import { useAuth } from '../context/AuthProvider';
import useMultistepForm from '../hooks/useMultistepForm';
import Modal from '../components/Modal';
import AccountSelection from '../components/DockForm/AccountSelection';
import Processing from '../components/DockForm/Processing';
import DockingSuccessful from '../components/DockForm/DockingSuccessful';
import DockingFailed from '../components/DockForm/DockingFailed';

const Dock = () => {
  const { profile } = useAuth();
  const [isChecked, setIsChecked] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [seedPhrase, setSeedPhrase] = useState('');

  const handleChangePhrase = (e) => {
    setSeedPhrase(e.target.value);
  };

  const handleDockAccount = () => {
    goTo(1);
    dockAccount(profile.googleId, seedPhrase)
      .then((data) => {
        goTo(2);
      })
      .catch((e) => {
        goTo(3);
        console.log('Error Dock Account', e);
      });
  };

  const closeModal = () => {
    goTo(0);
    setOpenModal(false);
  };

  const { step, goTo } = useMultistepForm([
    <AccountSelection
      stepSettings={{
        showExitButton: true,
        closeHandler: () => closeModal(),
        showGoBackButton: true,
        goBackButtonHandler: () => closeModal(),
        title: 'Account Selection',
        subTitle: 'Enter address of the account you with to Dock',
        showSteps: false,
        step: 0,
      }}
      phrase={seedPhrase}
      handleChangePhrase={handleChangePhrase}
      handleDockAccount={handleDockAccount}
    />,
    <Processing
      stepSettings={{
        showExitButton: false,
        showGoBackButton: false,
        title: 'Processing...',
        subTitle: 'Spaceport is docking DO NOT CLOSING THIS SCREEN.',
        showSteps: false,
        step: 0,
      }}
    />,
    <DockingSuccessful
      stepSettings={{
        showExitButton: false,
        showGoBackButton: false,
        title: 'Docking Successful',
        subTitle: 'Welcome to Spaceport!',
        showSteps: false,
        step: 0,
      }}
    />,
    <DockingFailed
      stepSettings={{
        showExitButton: true,
        closeHandler: () => closeModal(),
        showGoBackButton: false,
        title: 'Error: Docking Failed',
        subTitle: 'Spaceport is docking. DO NOT CLOSE THIS SCREEN.',
        showSteps: false,
        step: 0,
      }}
    />,
  ]);

  return (
    <div className="borderSecondary flex flex-col gap-y-[23px] px-[42px] py-[34px]">
      <div className="border-b-[2px] border-solid border-theme-blue">
        <span className="font-bold text-[18px] leading-[22px]">
          Dock an Account to Spaceport
        </span>
      </div>
      <p className="font-normal text-[18px] leading-[150%]">
        SPACEPORT allows users to seamlessly connect to dApps and services in
        the NEAR ecosystem from a secure and simple entry point. If you would
        like to add an existing NEAR account to your Spaceport account, proceed
        below.{' '}
        <span className="font-bold text-[18px] leading-[150%]">
          Docking only works with a passphrase (seed phrase).
        </span>
      </p>
      <div className="flex flex-col gap-y-[15px] borderPrimary px-[27px] pt-[25px] pb-[42px] ">
        <div>
          <span className="font-bold text-[18px] leading-[22px]">
            ATTENTION:
          </span>{' '}
          <span className="font-normal text-[18px] leading-[150%]">
            Docking process will delete all security & recovery options
          </span>
        </div>
        <div className="flex items-center gap-x-[13px] text-center">
          <div className="flex h-5 items-center">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-3 border-dark focus:ring-primary"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
          </div>
          <span className="font-normal text-[18px] leading-[150%]">
            I understand and wish to proceed
          </span>
        </div>
      </div>
      <button
        className="m-auto w-[400px] h-[42px] bg-primary rounded-[4px] hover:bg-primaryLight disabled:bg-primaryLight"
        disabled={!isChecked}
        onClick={() => setOpenModal(true)}
      >
        Connect an Account
      </button>
      {openModal && (
        <Modal open={openModal} setOpen={setOpenModal}>
          {step}
        </Modal>
      )}
    </div>
  );
};

export default Dock;
