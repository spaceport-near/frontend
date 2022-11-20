import React from 'react';
import { Navigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import LoginGoogleButton from '../components/LoginButton';
import { useAuth } from '../context/AuthProvider';
import logo from '../assets/logo.svg';
import bigLogo from '../assets/bigLogo.svg';

const Home = () => {
  const { token, onSuccess, onFailure } = useAuth();
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  return (
    <div className="flex flex-col h-screen md:container md:mx-auto bg-dark text-white">
      {token && <Navigate to="/dashboard" state={{ from: location }} />}
      <main className="flex flex-col flex-[1_0_auto] m-auto items-center pt-[108px] pb-[60px]">
        <img src={bigLogo} alt={logo} />
        <p className="flex text-hero pt-[57px] pb-[157px] text-center">
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
        <div className="flex flex-row mt-auto justify-between items-center border-t border-primary py-[32px] px-[20px]">
          <div className="flex flex-1 justify-start"></div>
          <div className="flex flex-1 justify-center text-footer_sm">
            © Spaceport Labs {new Date().getFullYear()}
          </div>
          <div className="flex flex-1 justify-end items-center">
            <p className="text-footer_sm pr-[5px]">Follows us:</p>
            <div className="flex ml-[10px] gap-x-[10px]">
              <div className="cursor-pointer ">
                <a href="https://twitter.com/spaceport_labs" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-7 h-7 fill-primary hover:fill-primaryLight"
                  >
                    <path
                      fill="primary"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    />
                  </svg>
                </a>
              </div>
              <div className="cursor-pointer ">
                <a
                  href="https://www.youtube.com/channel/UCL6YEFg_Mh9eIzAAWPLYgYw"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="w-7 h-7 fill-primary hover:fill-primaryLight"
                  >
                    <path
                      fill="primary"
                      d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
