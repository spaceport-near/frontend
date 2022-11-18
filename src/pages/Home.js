import React from 'react';
import { Navigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import LoginGoogleButton from '../components/LoginButton';
import { useAuth } from '../context/AuthProvider';
import FooterMenu from '../components/FooterMenu';
import logo from '../assets/logo.svg';
import bigLogo from '../assets/bigLogo.svg';

const Home = () => {
  const { token, onSuccess, onFailure } = useAuth();
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  return (
    <div className="flex flex-col h-screen md:container md:mx-auto bg-dark text-white">
      {token && <Navigate to="/dashboard" state={{ from: location }} />}
      <header className="flex-[0_0_auto]">
        <div className="flex py-4 justify-between items-center">
          <div className="tracking-tight">
            <img src={logo} alt="spaceport" />
          </div>
          <div className="flex ml-auto items-center">
            <GoogleLogin
              clientId={clientId}
              render={(renderProps) => (
                <LoginGoogleButton
                  disabled={renderProps.disabled}
                  onClick={renderProps.onClick}
                />
              )}
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
            />
          </div>
        </div>
      </header>
      <main className="flex flex-col flex-[1_0_auto] items-center pt-[108px] pb-[60px]">
        <img src={bigLogo} alt={logo} />
        <p className="text-hero pt-[57px] pb-[157px]">
          Your Passport into the NEARVERSE
        </p>
        <GoogleLogin
          clientId={clientId}
          render={(renderProps) => (
            <LoginGoogleButton
              disabled={renderProps.disabled}
              onClick={renderProps.onClick}
            />
          )}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
        />
      </main>
      <footer className="flex flex-col flex-[0_0_auto] ">
        <div className="flex justify-between w-full pb-[60px]">
          <div className="flex flex-1">
            <img className="w-[243px] h-[23px]" src={logo} alt="spaceport" />
          </div>
          <div className="flex flex-1 justify-between">
            <FooterMenu />
            <div className="flex flex-col">
              <GoogleLogin
                clientId={clientId}
                render={(renderProps) => (
                  <LoginGoogleButton
                    disabled={renderProps.disabled}
                    onClick={renderProps.onClick}
                  />
                )}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-auto justify-between items-center border-t border-primary py-[32px] px-[20px]">
          <div className="flex flex-1 justify-start"></div>
          <div className="flex flex-1 justify-center text-footer_sm">
            © Spaceport Labs {new Date().getFullYear()}
          </div>
          <div className="flex flex-1 justify-end items-center">
            <p className="text-footer_sm pr-[5px]">Follows us:</p>
            {[...new Array(4)].map((item, index) => (
              <div className="ml-[10px]" key={'social' + index}>
                <div className="w-[44px] h-[44px] rounded-[22px] bg-primary hover:bg-primaryLight cursor-pointer"></div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
