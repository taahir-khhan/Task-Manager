import AddTask from "./components/AddTask";
import ListTasks from "./components/ListTasks";

function App() {
  return (
    <div className='min-h-screen w-full bg-black p-10'>
      <AddTask />
      <ListTasks />
    </div>
  );
}

export default App;
