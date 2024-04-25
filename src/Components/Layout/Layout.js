import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './layout.css';
import profileImage from './profile.JPG';
import SideBar from '../Sidebar/SideBar';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  let date = new Date().toDateString();
  const { pathname } = useLocation();
  return (
    <div className='container'>
      <SideBar />
      {pathname === '/' && <Navigate to='/dashboard' />}
      <div className='right-container'>
        <div className='top-right-container'>
          <div className='top-right-first'>{date}</div>
          <div className='top-right-second'>
            <div>
              <FaSearch />
              <input type='text' className='search' placeholder='Search...' />
            </div>
          </div>
          <div className='top-right-third'>
            <div>
              <img src={profileImage} alt='profile' />
              <div>
                <span>Kisan Das</span>
                <span>kisandas13@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className='bottom-right-container'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
