import React from 'react';
import './order.css';
import dbLogo from './db-logo.webp';
import { ordersData } from '../../Data';
import OrdersPieChart from './OrdersPieChart';

const Orders = ({ groupNumber }) => {
  return (
    <div className='dashboard-right'>
      <div className='dashboard-right-head'>
        <img src={dbLogo} alt='' />
        <span>Orders Today</span>
      </div>
      <div className='stats'>
        <span>Amount</span>
        <span>$ {groupNumber(37000)}</span>
      </div>
      <div className='orders'>
        {ordersData.map((order, index) => {
          return (
            <div className='order' key={index}>
              <div>
                <span>{order.name}</span>
                <span>$ {order.change}</span>
              </div>
              <div>
                <span>{order.type}</span>
                <span>Items: {order.items}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className='orderChart'>
        <span>Split by Orders</span>
        <OrdersPieChart />
      </div>
    </div>
  );
};

export default Orders;
