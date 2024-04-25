import React from 'react';
import './statistics.css';
import { BsArrowUpShort } from 'react-icons/bs';
import StatisticsChart from '../StatisticsCharts/StatisticsChart';

const Statistics = ({ groupNumber }) => {
  return (
    <div className='dashboard-left-bottom'>
      <span className='title'>Overview Statistics</span>
      <div className='cards'>
        <div className='first'>
          <BsArrowUpShort />
          <div className='card'>
            <span>Top item this month</span>
            <span>Office comps</span>
          </div>
        </div>

        <div className='second'>
          <span>Items</span>
          <span>{groupNumber(445)}</span>
        </div>

        <div className='third'>
          <span>Daily Average</span>
          <span>${groupNumber(2000)}</span>
        </div>

        <div className='forth'>
          <span>Profit</span>
          <span>${groupNumber(37000)}</span>
        </div>
      </div>
      <StatisticsChart />
    </div>
  );
};

export default Statistics;
