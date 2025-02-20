import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";

const AddTask = () => {
  const [task, setTask] = useState({ title: "", description: "", status: "" });
  const dispatch = useDispatch();

  const addTaskHandler = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    setTask({ title: "", description: "", status: "" });
  };

  return (
    <div className='w-full flex items-center justify-center flex-col gap-5 pt-10'>
      <form
        className='bg-black  flex flex-col gap-5 min-w-[600px] p-5 rounded-2xl border border-yellow-50'
        onSubmit={addTaskHandler}
      >
        <h1 className='text-3xl text-white text-center font-bold'>Add Task</h1>
        <div>
          <label
            htmlFor='title'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Title:
          </label>
          <input
            type='text'
            required
            id='title'
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            value={task.title}
            className='block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          ></input>
        </div>

        <div>
          <label
            htmlFor='message'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Description:
          </label>
          <textarea
            id='message'
            rows='4'
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            value={task.description}
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Write your description here...'
          ></textarea>
        </div>

        <div>
          <label
            htmlFor='status'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Status:
          </label>
          <select
            id='status'
            defaultValue={task.status}
            onChange={(e) => setTask({ ...task, status: e.target.value })}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option value=''>select status</option>
            <option value='complete'>complete</option>
            <option value='incomplete'>incomplete</option>
          </select>
        </div>

        <button
          type='submit'
          className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 cursor-pointer hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2'
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
