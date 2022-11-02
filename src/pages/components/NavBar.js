import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBarLinks =[
  {
    name:'My Assets',
    path:'',
    key:'myassets',
    active: false,
  },
  {
    name:'Trade',
    path:'trade',
    key:'trade',
    active: false,
  },
  {
    name:'Stake',
    path:'stake',
    key:'stake',
    active: false,
  },
  {
    name:'Dock',
    path:'dock',
    key:'dock',
    active: true,
  },
  {
    name:'Undock',
    path:'undock',
    key:'undock',
    active: false,
  },
]

const NavBar = () => {
  return (
    <nav className="flex w-full gap-x-[31px] py-[0px] px-[10px] border-2 border-primary">
      {NavBarLinks.map((link) => (
        <div
          className="w-[160px] text-center items-center pt-[9px] pb-[8px] pr-[6px]"
          key={link.key}
        >
          <NavLink
            key={link.key}
            to={`/dashboard/${link.path}`}
            className={({ isActive }) =>
              isActive
                ? 'flex bg-theme-blue rounded-[16px] text-center items-center w-full justify-center px-[0px] py-[9px]'
                : 'flex bg-[transparent] rounded-[16px] text-center items-center w-full justify-center px-[0px] py-[9px]'
            }
            end
          >
            <span className="font-bold text-[18px] leading-[22px] text-center">{link.name}</span>
          </NavLink>
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
