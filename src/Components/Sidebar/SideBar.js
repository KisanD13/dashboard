import React from 'react';
import './sidebar.css';
import dbLogo from './db-logo.webp';
import { BiSolidDashboard } from 'react-icons/bi';
import { BsFillKanbanFill } from 'react-icons/bs';
import { FaUserSecret } from 'react-icons/fa6';

import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='sidebar'>
      <img src={dbLogo} alt='logo' />
      <div className='menu'>
        <NavLink to='/dashboard' className='dashboard-icon' title={'Dashboard'}>
          <BiSolidDashboard />
        </NavLink>

        <NavLink to='/kanban-trello' className='kanban' title={'Kanban'}>
          <BsFillKanbanFill />
        </NavLink>
        <NavLink to='/users' className='users' title={'Users'}>
          <FaUserSecret />
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
