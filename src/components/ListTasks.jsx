import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, updateStatus } from "../store/taskSlice";

const ListTasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className='w-1/2 mx-auto mt-10 text-white'>
      <h1 className='text-5xl text-blue-600 font-bold mb-5'>All Tasks</h1>
      {tasks.length > 0 ? (
        tasks.map((item) => (
          <div
            key={item.id}
            className='border p-4 rounded bg-gray-800 mb-2 flex items-center justify-between'
          >
            <div className='flex flex-col gap-2'>
              <h1 className='text-xl font-semibold'>{item.title}</h1>
              <p>{item.description}</p>
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
                    ? "text-green-500 max-w-min font-bold  p-2 border-2 border-green-500 rounded-xl"
                    : "text-red-500 max-w-min font-bold  p-2 border-2 border-red-500 rounded-xl"
                }
              >
                <option value='complete'>complete</option>
                <option value='incomplete'>incomplete</option>
              </select>
            </div>

            <button
              onClick={() => dispatch(deleteTask(item.id))}
              className='bg-red-500 text-white px-4 py-2 rounded-2xl hover:bg-red-400 cursor-pointer'
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default ListTasks;
