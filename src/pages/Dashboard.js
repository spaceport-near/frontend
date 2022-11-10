import logo from '../assets/logo.svg';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';

const Dashboard = () => {
  const { profile, onFailure } = useAuth();

  return (
    <div className="flex h-screen bg-primary">
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex justify-between items-center bg-dark min-h-[70px] px-[80px]">
          <div className="flex">
            <img src={logo} alt="spaceport" />
          </div>
          <div className="flex">
            <p className="flex text-white items-center pr-[20px]">
              {profile ? profile.email : 'no name'}
            </p>
            <button
              type="button"
              className="m-auto text-dark px-[30px] h-[42px] bg-primary rounded-[6px] hover:bg-primaryLight"
              onClick={onFailure}
            >
              Sign Out
            </button>
          </div>
        </header>
        <div className="flex h-full">
          <SideBar />
          <main className="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto">
            <div className="w-full h-[132px] border-solid border-b-[2px] border-primary pt-[53px] pb-[30px] pl-[63px]">
              <span className="text-dark font-normal text-[48px] leading-[60px]">
                HOME
              </span>
            </div>
            <div className="px-[25px] py-[30px]">
              <NavBar />
            </div>
            <div className="max-h-[954px]  px-[25px] pb-[35px]">
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
