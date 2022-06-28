import { gapi } from 'gapi-script';
import { useCallback, useEffect } from 'react';
import { ModalLogin } from './ModalLogin';
import { ModalRegister } from './ModalRegister';

type Props = {
  setModal: () => void;
  handleHasAccount: (state: boolean) => void;
  hasAccount: boolean;
};

const GOOOGLE__ID =
  '559808093542-46inddin77vmcmgtctc559e62bpnotgk.apps.googleusercontent.com';

export const Modal: React.FC<Props> = ({
  setModal,
  handleHasAccount,
  hasAccount,
}) => {
  const handleKeyPress = (event: globalThis.KeyboardEvent): void => {
    if (event.key === 'Escape') {
      setModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress, false);

    return () => document.removeEventListener('keydown', handleKeyPress, false);
  }, []);

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: GOOOGLE__ID,
        scope: ""
      })
    }
  })

  return (
    <div className="absolute top-0 bottom-0 bg-neutral-800 bg-opacity-40 w-full h-full z-50 flex items-center justify-center index">
      {hasAccount ? (
        <ModalLogin setModal={setModal} handleHasAccount={handleHasAccount} />
      ) : (
        <ModalRegister
          setModal={setModal}
          handleHasAccount={handleHasAccount}
        />
      )}
    </div>
  );
};
