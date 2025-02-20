import React from "react";
import AddTask from "./components/AddTask";
import ListTasks from "./components/ListTasks";

function App() {
  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-gray-900 to-black p-6 sm:p-10'>
      <header className='text-center mb-10'>
        <h1 className='text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
          Task Manager
        </h1>
        <p className='text-gray-400 mt-2 text-lg sm:text-xl'>
          Organize your tasks efficiently and boost your productivity.
        </p>
      </header>

      <main className='max-w-7xl mx-auto'>
        <div className='bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700 p-6 sm:p-8 mb-10'>
          <AddTask />
        </div>
        <div className='bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700 p-6 sm:p-8'>
          <ListTasks />
        </div>
      </main>

      <footer className='text-center mt-10 text-gray-400'>
        <p>© 2025 Tahir Khan Task Manager. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
