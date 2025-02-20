import { motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";

const AddTask = () => {
  const [task, setTask] = useState({ title: "", description: "", status: "" });
  const dispatch = useDispatch();

  const addTaskHandler = (e) => {
    e.preventDefault();
    if (task.title && task.description && task.status) {
      dispatch(addTask(task));
      setTask({ title: "", description: "", status: "" });
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='w-full flex items-center justify-center flex-col gap-5 py-10 px-4 sm:px-6 lg:px-8'
    >
      <form
        className='bg-gray-900 shadow-2xl rounded-lg p-6 w-full max-w-md border border-gray-700'
        onSubmit={addTaskHandler}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className='text-3xl font-bold text-center text-white mb-6'
        >
          Add New Task
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className='mb-6'
        >
          <label
            htmlFor='title'
            className='block text-sm font-medium text-gray-300 mb-2'
          >
            Title:
          </label>
          <input
            type='text'
            id='title'
            required
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            className='w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400'
            placeholder='Enter task title'
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className='mb-6'
        >
          <label
            htmlFor='description'
            className='block text-sm font-medium text-gray-300 mb-2'
          >
            Description:
          </label>
          <textarea
            id='description'
            rows='4'
            required
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            className='w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400'
            placeholder='Enter task description'
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className='mb-6'
        >
          <label
            htmlFor='status'
            className='block text-sm font-medium text-gray-300 mb-2'
          >
            Status:
          </label>
          <select
            id='status'
            required
            value={task.status}
            onChange={(e) => setTask({ ...task, status: e.target.value })}
            className='w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white'
          >
            <option value=''>Select status</option>
            <option value='complete'>Complete</option>
            <option value='incomplete'>Incomplete</option>
          </select>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type='submit'
          className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300'
        >
          Add Task
        </motion.button>
      </form>
    </motion.div>
  );
};

export default AddTask;
