import React, { useState } from 'react';
import CardList from './CardList';
// import InProgres from './InProgress';
// import Completed from './Completed';
// import Todo1 from './Todo1';

const Board = () => {
  const [addTodo, setAddTodo] = useState([]);
  const [addInProgress, setAddInProgress] = useState([]);
  const [addCompleted, setAdCompleted] = useState([]);
  return (
    <div className='board'>
      <CardList
        title='To-Do'
        btnText='Add Todo'
        active={addTodo}
        setActive={setAddTodo}
        setAddInProgress={setAddInProgress}
        setAdCompleted={setAdCompleted}
      />
      <CardList
        title='In progress'
        btnText='Add Todo'
        active={addInProgress}
        setActive={setAddInProgress}
        setAddTodo={setAddTodo}
        setAdCompleted={setAdCompleted}
      />
      <CardList
        title='Completed'
        btnText='Add Todo'
        active={addCompleted}
        setActive={setAdCompleted}
        setAddTodo={setAddTodo}
        setAddInProgress={setAddInProgress}
      />
    </div>
  );
};

export default Board;
