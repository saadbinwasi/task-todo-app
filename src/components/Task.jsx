import React from 'react'
import NewTask from './NewTask'

function Task({tasks,onAddTask,onDeleteTask}) {
  return (
    <section>

        <h2 className='text-2xl font-bold text-stone-700 mb-4'>Tasks</h2>

       <NewTask onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
       {tasks.length === 0 && <p className='text-stone-800 my-5'>This Project does not have any task yet.</p>}
       {tasks.length > 0 &&
         <ul className='p-4 mt-8 rounded-md bg-stone-100'>

            {tasks.map((task) => 
            (
                <li className='flex justify-between my-4' key={task.id}>
                <span>{task.text}</span>
                <button onClick={() => onDeleteTask(task.id)} className='text-stone-700 hover:text-red-500'>Clear Task</button>
                </li>
            )
            )}
        
         </ul>}
      
    </section>
  )
}

export default Task
