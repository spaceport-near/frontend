import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const Modal = ({ open, setOpen, children }) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => {}}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed top-[65px] inset-0 bg-white transition-opacity" />
        </Transition.Child>

        <div className="fixed h-screen top-[65px] px-[80px] inset-0 z-10 overflow-y-auto">
          <div className="w-auto">{children}</div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
