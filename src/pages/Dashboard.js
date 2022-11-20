import React from 'react';
import { Outlet } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
import { useAuth } from '../context/AuthProvider';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import logo from '../assets/logo.svg';

const Dashboard = () => {
  const { profile, onFailure } = useAuth();

  return (
    <div className="flex h-screen bg-primary">
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="relative z-20">
          <header className="flex justify-between items-center bg-dark min-h-[70px] px-[80px]">
            <div className="flex">
              <img src={logo} alt="spaceport" />
            </div>
            <div className="flex">
              <p className="flex text-white items-center pr-[20px]">
                {profile ? profile.email : 'no name'}
              </p>
              <GoogleLogout
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Logout"
                render={(renderProps) => (
                  <button
                    type="button"
                    className="m-auto text-dark px-[30px] h-[42px] bg-primary rounded-[6px] hover:bg-primaryLight"
                    onClick={renderProps.onClick}
                  >
                    Sign Out
                  </button>
                )}
                onLogoutSuccess={onFailure}
              ></GoogleLogout>
            </div>
          </header>
        </div>
        <div className="flex h-full">
          <SideBar />
          <main className="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto pb-[60px]">
            <div className="w-full border-solid border-b-[2px] border-primary py-[30px] pl-[63px]">
              <span className="text-dark font-normal text-[48px] leading-[60px]">
                HOME
              </span>
            </div>
            <div className="px-[25px] py-[30px]">
              <NavBar />
            </div>
            <div className="max-h-[1000px]  px-[25px] pb-[35px]">
              <div className="border-2 border-primary rounded-[3px]">
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
