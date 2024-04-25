import React from 'react';
import './kanban.css';
import Board from './Board';
const Kanban = () => {
  return (
    <div className='kanban-container'>
      <div> Kanban Board</div>

      <div className='boards'>
        <Board />
      </div>
    </div>
  );
};

export default Kanban;
