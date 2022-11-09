import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBarLinks =[
  {
    name:'My Assets',
    path:'',
    key:'myassets',
    active: false,
    comingSoon: false,
  },
  {
    name:'Trade',
    path:'trade',
    key:'trade',
    active: false,
    comingSoon: true,
  },
  {
    name:'Stake',
    path:'stake',
    key:'stake',
    active: false,
    comingSoon: true,
  },
  {
    name:'Dock',
    path:'dock',
    key:'dock',
    active: true,
    comingSoon: false,
  },
  {
    name:'Undock',
    path:'undock',
    key:'undock',
    active: false,
    comingSoon: false,
  },
]

const NavBar = () => {
  return (
    <nav className="flex w-full gap-x-[31px] py-[0px] px-[10px] border-2 border-primary">
      {NavBarLinks.map((link) => (
        <div
          className="w-[160px] text-center items-center pt-[9px] pb-[8px] pr-[6px]"
          key={link.key}
        >{link.comingSoon ? (
          <NavLink
            key={link.key}
            to={`/dashboard/${link.path}`}
            className="flex bg-[transparent] rounded-[16px] text-center items-center w-full justify-center px-[0px] py-[9px] opacity-50"
            end
          >
            <div className="flex flex-col items-start">
              <span className="font-bold text-[18px] leading-[22px] text-center">{link.name}</span>
              <span className="text-green text-[14px]">Coming Soon</span>
            </div>
          </NavLink>
        ) : (
          <NavLink
            key={link.key}
            to={`/dashboard/${link.path}`}
            className={({ isActive }) =>
              isActive
                ? 'flex bg-primary rounded-[16px] text-center items-center w-full justify-center px-[0px] py-[9px] '
                : 'flex bg-[transparent] rounded-[16px] text-center items-center w-full justify-center px-[0px] py-[9px] hover:bg-primaryLight'
            }
            end
          >
            <span className="font-bold text-[18px] leading-[22px] text-center">{link.name}</span>
          </NavLink>
        )}
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
