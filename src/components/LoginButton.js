import React from 'react';

const LoginGoogleButton = ({ disabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-10 py-2.5 text-sm text-base text-darkLight hover:bg-primaryLight disabled:opacity-50"
    >
      Log in with Google
    </button>
  );
};

export default LoginGoogleButton;
