import React from 'react';
import './chart.css';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

const StatisticsChart = () => {
  const option = {
    color: ['var(--orange)'],
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },

    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross' },
      backgroundColor: 'rgba(0,0,0,0.59)',
      borderWidth: 0,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
    ],
    yAxis: [
      {
        type: 'value',
        splitLine: { show: false },
      },
    ],
    series: [
      {
        type: 'line',
        smooth: true,
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'red' }, // Start color
            { offset: 1, color: 'blue' }, // End color
          ]),
          width: 2,
        },
        areaStyle: {
          opacity: 0.7,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'red' }, // Start color
            { offset: 1, color: 'black' }, // End color
          ]),
          width: 4,
        },
        showSymbol: false,
        data: [528000, 319000, 532000, 218000, 441000, 30000, 26000],
      },
    ],
  };
  return <ReactECharts option={option} />;
};

export default StatisticsChart;
