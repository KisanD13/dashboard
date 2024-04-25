import React, { useState } from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { RxCrossCircled } from 'react-icons/rx';

const CardList = ({
  title,
  btnText,
  active,
  setActive,
  setAddTodo,
  setAddInProgress,
  setAdCompleted,
}) => {
  const [addCard, setAddCard] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [editInputValue, setEditInputValue] = useState('');

  const dateTime = Date.now();
  // console.log(dateTime);

  const handleCard = () => {
    if (inputValue === '') {
      alert('please enter value');
    } else {
      setActive([
        ...active,
        { id: dateTime, cardDetails: inputValue, showEdit: false },
      ]);
      setInputValue('');
      setAddCard(false);
    }
  };

  // console.log(active, editInputValue);

  const functionEdit = (id) => {
    const updatedArr = active.map((ele, index) => {
      if (ele.id === id) {
        setEditInputValue(ele.cardDetails);
        return { ...ele, showEdit: !ele.showEdit };
      }
      return ele;
    });
    setActive(updatedArr);
  };

  const editUpdate = (id) => {
    const updatedArr = active.map((ele) => {
      if (ele.id === id) {
        return { ...ele, cardDetails: editInputValue, showEdit: !ele.showEdit };
      }
      return ele;
    });
    setActive(updatedArr);
    setEditInputValue('');
  };

  const deleteCard = (id) => {
    const updatedArr = active.filter((ele) => ele.id !== id);
    setActive(updatedArr);
  };

  function drag(e, ele) {
    // console.log(e.target);
    e.dataTransfer.setData('text', JSON.stringify([e.target.id, ele]));
    
  }

  function allowDrop(e) {
    e.preventDefault();
    // console.log('object1');
  }

  function drop(e) {
    let data = JSON.parse(e.dataTransfer.getData('text'));

    let temp = [...active];
    // temp.map((item))
    // temp.push(data[1])
    let i = 0;
    temp.forEach((item) => {
      if(item.id === data[1].id){
        i++
      }
    })

    if(i === 0){
      setActive([...active, data[1]])
    }
    // setActive([...new Set(temp)]);
    if(setAddTodo){
      setAddTodo((prev) => {
        let arr = prev;
        arr = arr.filter(function(item) {
          return item.id !== data[1].id
      })
      return arr
        // prev.remove()
      }) 
    }

    if(setAddInProgress){
      setAddInProgress((prev) => {
        let arr = prev;
        arr = arr.filter(function(item) {
          return item.id !== data[1].id
      })
      return arr
        // prev.remove()
      }) 
    }

    if(setAdCompleted){
      setAdCompleted((prev) => {
        let arr = prev;
        arr = arr.filter(function(item) {
          return item.id !== data[1].id
      })
      return arr
        // prev.remove()
      })
    }
    // setAddInProgress, setAdCompleted;

    console.log(data);
  }

  return (
    <div className='todo'>
      <h1>{title}</h1>
      {!addCard && (
        <button onClick={() => setAddCard(true)} className='addCardBtn'>
          {btnText}
        </button>
      )}

      {addCard && (
        <div className='addInput'>
          <input
            type='text'
            placeholder='Add Card'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <IoIosAddCircle onClick={handleCard} />
          <RxCrossCircled onClick={() => setAddCard(false)} />
        </div>
      )}

      <div
        className='card-list'
        onDrop={(e) => drop(e)}
        onDragOver={(e) => allowDrop(e)}
      >
        {active.map((ele, index) => {
          return (
            <div
              id={ele.id}
              key={index}
              className='eachCard'
              draggable='true'
              onDragStart={(e) => drag(e, ele)}
            >
              {ele.showEdit ? (
                <div>
                  <input
                    type='text'
                    value={editInputValue}
                    onChange={(e) => setEditInputValue(e.target.value)}
                  />
                  <button onClick={() => editUpdate(ele.id)}>Update</button>
                </div>
              ) : (
                <p>{ele.cardDetails}</p>
              )}
              <div className='edit-delete'>
                {!ele.showEdit && (
                  <MdDelete onClick={() => deleteCard(ele.id)} />
                )}
                {!ele.showEdit && (
                  <FaEdit onClick={() => functionEdit(ele.id)} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
