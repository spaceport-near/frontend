import { useState } from 'react';
import Modal from '../components/Modal';
import useMultistepForm from '../hooks/useMultistepForm';
import AccountSelection from '../components/DockForm/AccountSelection';
import ArrowBack from '../assets/ArrowBack.svg';
import Processing from '../components/DockForm/Processing';
import DockingSuccessful from '../components/DockForm/DockingSuccessful';
import DockingFailed from '../components/DockForm/DockingFailed';

const Dock = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [phrase, setPhrase] = useState('');

  const handleChangePhrase = (e) => {
    setPhrase(e.target.value)
  }

  const handleDockAccount = () => {
    console.log('phrase', phrase);
    console.log('dock Account');
    goTo(1);
    setTimeout(() => goTo(2), 2000);
  }

  const closeModal = () => {
    goTo(0)
    setOpenModal(false);
  }

  const { step, goTo } = useMultistepForm([
    <AccountSelection
      setOpenModal={setOpenModal}
      phrase={phrase}
      handleChangePhrase={handleChangePhrase}
      handleDockAccount={handleDockAccount}
    />,
    <Processing doking/>,
    <DockingSuccessful setOpenModal={setOpenModal} closeModal={closeModal}/>,
    <DockingFailed />
  ])

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
          <span className="font-bold text-[18px] leading-[22px]">ATTENTION:</span>{' '}
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
      <button className="m-auto w-[400px] h-[42px] bg-primary rounded-[4px] hover:bg-primaryLight disabled:bg-primaryLight" disabled={!isChecked} onClick={() => setOpenModal(true)}>Connect an Account</button>
      {openModal &&
        <Modal open={openModal} setOpen={setOpenModal}>
          { step }
        </Modal>
      }
    </div>
  )
}

export default Dock;
