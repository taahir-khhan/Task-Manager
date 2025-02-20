import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, updateStatus } from "../store/taskSlice";

const ListTasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className='w-full px-4 sm:px-6 lg:px-8 py-10'>
      <h1 className='text-4xl sm:text-5xl text-blue-600 font-bold mb-8 text-center'>
        All Tasks
      </h1>

      {tasks.length > 0 ? (
        <div className='masonry-grid'>
          <AnimatePresence>
            {tasks.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className='masonry-item border border-gray-700 rounded-lg bg-gray-800 p-6 flex flex-col gap-4'
              >
                <div className='flex flex-col gap-2'>
                  <h1 className='text-xl font-semibold text-white'>
                    {item.title}
                  </h1>
                  <p className='text-gray-300'>{item.description}</p>
                </div>

                <select
                  id='status'
                  onChange={(e) =>
                    dispatch(
                      updateStatus({ id: item.id, status: e.target.value })
                    )
                  }
                  value={item.status}
                  className={
                    item.status === "complete"
                      ? "text-green-500 font-bold p-2 border-2 border-green-500 rounded-lg bg-transparent cursor-pointer"
                      : "text-red-500 font-bold p-2 border-2 border-red-500 rounded-lg bg-transparent cursor-pointer"
                  }
                >
                  <option value='complete'>Complete</option>
                  <option value='incomplete'>Incomplete</option>
                </select>

                <button
                  onClick={() => dispatch(deleteTask(item.id))}
                  className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300'
                >
                  Delete
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='text-center text-gray-400 text-xl'
        >
          No tasks available. Add a new task to get started!
        </motion.div>
      )}
    </div>
  );
};

export default ListTasks;
