import React, { useState, useReducer } from 'react';
import './App.css';
import data from './data';
import Modal from './Modal';
import reducer from './reducer';

function App() {
  const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: 'hello world',
  };
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const submitHandler = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };
  const deleteHandler = (id) => {
    dispatch({ type: 'REMOVE_PERSON', payload: id });
  };
  return (
    <>
      <div className='container'>
        {state.isModalOpen && (
          <Modal closeModal={closeModal} modalContent={state.modalContent} />
        )}
        <form className='my-form' onSubmit={submitHandler}>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className='primary-btn' type='submit'>
            Add
          </button>
        </form>
        <div className='people'>
          {state.people.map((person) => {
            return (
              <div key={person.id} className='person'>
                <p>{person.name}</p>
                <button
                  type='button'
                  className='delete-btn'
                  onClick={() => {
                    deleteHandler(person.id);
                  }}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
