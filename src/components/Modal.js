import { useRef } from 'react';
import { Dialog } from '@headlessui/react';

const Modal = ({ open, children }) => {
  const cancelButtonRef = useRef(null);

  return (
    <Dialog
      open={open}
      onClose={() => {}}
      className="relative z-10"
      initialFocus={cancelButtonRef}
    >
      <div className="fixed inset-0 bg-white" aria-hidden="true" />
      <div className="fixed inset-0 overflow-y-auto px-[80px]">
        <div className="w-auto">{children}</div>
      </div>
    </Dialog>
  );
};

export default Modal;
