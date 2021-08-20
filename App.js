import { useState } from "react";
import Header from "./components/Header.js";
import Tasks from "./components/Tasks.js";
import AddTask from "./components/AddTask.js"

function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at Scholl',
      day: 'feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'feb 5th at 3pm',
      reminder: false,
    },
  ])

  //delete tasks
  const deleteTask = (id) => {
    setTask(
      tasks.filter((task) => (task.id !== id))
    )
  }

  //reminder
  const toggleReminder = (id) => {
    setTask(
      tasks.map(
        (task) =>
          (
            task.id === id ? { ...task, reminder: !task.reminder } : task
          )
      )
    )
  }

  //add task
  const addTask = ({text, day, reminder}) => {

    if(text && day){
      setTask([...tasks, {id: (tasks.length+1), text: text, day: day, reminder: reminder}])
    }
  }

  //verificar campos null ok
  //open/close add form 

  return (
    <div className="container">
      <Header />
      <AddTask 
        onAdd={addTask}
      />
      {/* passa o onDelete com o deleteTask pro componente Tasks */}
      {tasks.length > 0 ? //if else
        <Tasks tasks={tasks} 
        onDelete={deleteTask} 
        onToggle={toggleReminder} /> :
        'No tasks to show'
      }

    </div>
  );
}

export default App;
