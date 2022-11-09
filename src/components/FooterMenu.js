import React from 'react';

const menuMobileApp = {
  title: 'Mobile App',
  menu: [
    {
      title: 'Features',
      link: '#'
    },
    {
      title: 'Live share',
      link: '#'
    },
    {
      title: 'Video record',
      link: '#'
    },
  ]
}

const menuCommunity = {
  title: 'Community',
  menu: [
    {
      title: 'Featured artists',
      link: '#'
    },
    {
      title: 'The Portal',
      link: '#'
    },
    {
      title: 'Live events',
      link: '#'
    },
  ]
}

const menuCompany = {
  title: 'Company',
  menu: [
    {
      title: 'About us',
      link: '#'
    },
    {
      title: 'Contact us',
      link: '#'
    },
    {
      title: 'History',
      link: '#'
    },
  ]
}

const FooterMenu = () => {
  return (
    [menuMobileApp, menuCommunity, menuCompany].map((item, index) => (
    <div className="flex flex-col" key={item.title + index}>
      <h4 className="text-primary">{item.title}</h4>
      <ul className="pt-[16px] text-menu_sm">
        {item.menu.map((data, index) => (
          <li key={data.title + index}>{data.title}</li>
        ))}
      </ul>
    </div>
  ))
  );
}

export default FooterMenu;
