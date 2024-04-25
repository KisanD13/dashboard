import React from 'react';
import './dashboard.css';
import { cardsData } from '../../Data';
import Statistics from '../../Components/Statistics/Statistics';
import Orders from '../../Components/Orders/Orders';

const DashBoard = () => {
  const groupNumber = (number) => {
    return parseFloat(number.toFixed(2)).toLocaleString({ useGrouping: true });
  };

  return (
    <div className='dashboard-container'>
      <div className='dashboard-left'>
        <div className='dashboard-left-top'>
          <div className='left-top-container'>
            <div className='left-top-head'>
              <span>Dashboard</span>

              <select>
                <option>1 week</option>
                <option>1 month</option>
                <option>1 year</option>
              </select>
            </div>
            <div className='cards'>
              {cardsData.map((data, index) => {
                const changeColor =
                  data.change >= 0 ? { color: 'green' } : { color: 'red' };
                return (
                  <div className='card' key={index}>
                    <div className='card-head'>
                      <span>{data.title}</span>
                      <span style={changeColor}>
                        {data.change >= 0 ? '+' : ''}
                        {data.change}%
                      </span>
                    </div>
                    <h5>
                      <span>$</span>
                      {groupNumber(data.amount)}
                    </h5>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Statistics groupNumber={groupNumber} />
      </div>
      <Orders groupNumber={groupNumber} />
    </div>
  );
};

export default DashBoard;
