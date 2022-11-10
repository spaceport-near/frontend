import React from 'react';
import { NavLink } from 'react-router-dom';

import round from '../assets/icons/round.svg';
import polygon from '../assets/icons/polygon.svg';
import rectangle from '../assets/icons/rectangle.svg';
import arrow from '../assets/icons/arrow.svg';
import star from '../assets/icons/star.svg';
import letterA from '../assets/letterA.svg';

export const NavBarItems = [
  {
    name: 'Home',
    icon: round,
    link: '',
    key: 'home',
    active: true,
    comingSoon: false,
  },
  {
    name: 'Ecosystem',
    icon: polygon,
    link: 'ecosystem',
    key: 'ecosystem',
    active: false,
    comingSoon: true,
  },
  {
    name: 'Marketplace',
    icon: rectangle,
    link: 'marketplace',
    key: 'marketplace',
    active: false,
    comingSoon: true,
  },
  {
    name: 'Settings',
    icon: arrow,
    link: 'settings',
    key: 'settings',
    active: false,
    comingSoon: true,
  },
  {
    name: 'Help?',
    icon: star,
    link: 'help',
    key: 'help',
    active: false,
    comingSoon: true,
  },
];

const SideBar = () => {
  return (
    <div className="flex flex-col min-w-[323] min-h-[950] bg-theme-blue box-border">
      <div className="flex flex-col box-border pt-[48px] pr-[36px] pb-[0px] pl-[48px]">
        <div className="pb-[56px] flex items-center">
          <span className="font-normal text-[24px] leading-[30px]">MY</span>
          <img src={letterA} alt="rocket" className="pl-3" />
          <span className="font-normal text-[24px] leading-[30px]">CCOUNT</span>
        </div>
      </div>
      <nav className="flex flex-col gap-y-[30px] px-[36px]">
        {NavBarItems.map((item) => (
          <div
            className="flex items-center text-center box-border gap-x-[13px]"
            key={item.key}
          >
            {item.comingSoon ? (
              <NavLink
                className="flex items-center text-center py-[15px] pr-[0px] pl-[14px] gap-x-[13px] rounded-[8px] w-[251px] opacity-50"
                key={item.key}
                to=""
              >
                <img className="block" src={item.icon} alt="icon" />
                <div className="flex flex-col items-start">
                  <p className="font-normal text-[18px] leading-[22px]">
                    {item.name}
                  </p>
                  <p className="text-green text-[14px]">Coming Soon</p>
                </div>
              </NavLink>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'flex items-center text-center py-[15px] pr-[0px] pl-[14px] gap-x-[13px] bg-[#ffffff54] rounded-[8px] box-border w-[251px]'
                    : 'flex items-center text-center py-[15px] pr-[0px] pl-[14px] gap-x-[13px] rounded-[8px] w-[251px] hover:bg-[#ffffff54]'
                }
                key={item.key}
                to={item.link}
              >
                <img className="block" src={item.icon} alt="icon" />
                <p className="font-normal text-[18px] leading-[22px]">
                  {item.name}
                </p>
              </NavLink>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default SideBar;
