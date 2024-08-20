import React, { useRef, useState } from 'react'
import Modal from './Modal';

function NewTask({onAddTask}) {
    const [enteredTask,setEnteredTask] = useState('');
   
    const modalRef = useRef(); 

    function handleChange(e) {
        setEnteredTask(e.target.value);
        if (error) setError(null);
 
    }

    function handleClick() {
        if (!enteredTask.trim()) {
            modalRef.current.open(); // Open the modal if there's an error
            return;
          }
        onAddTask(enteredTask)
        setEnteredTask('')
    }

  return (
    <div className='flex items-center gap-4'>
        <input value={enteredTask} onChange={handleChange} type='text' className='w-64 px-2 py-1 rounded-sm bg-stone-200'/>
        <button onClick={handleClick}  className='text-stone-700 hover:text-stone-950'>Add Task</button>
      <Modal ref={modalRef} buttonCaption="Close">Opps... Error! Input Value Empty :(</Modal>
    </div>
  )
}

export default NewTask
