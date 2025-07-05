// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addData, deleteData, editTask, workComplete, workInComplete } from "./TodoApp/createSlice";




// const App=()=>{

//   const [val,setval] =useState("")
//   const [btn,setbtn] =useState(true)
//   const [edt,setedt] =useState("")
//   const task = useSelector((state)=>state.mytodo.todo)
//   const dispatch =useDispatch()


//   const AddTask=()=>{
//     dispatch(addData({id:Date.now(),Task:val}))
//     setval("");
//   }

//   const TaskDelete=(id)=>{
// dispatch(deleteData(id))
//   }

//   const TaskComplete=(id)=>{
// dispatch(workComplete(id))
//   }

//   const TaskInComplete=(id)=>{
// dispatch(workInComplete(id))
//   }


//   const TaskEdit=(id,Task)=>{
//     setval(Task)
    
//      setedt(id)
//       setbtn(false)

//   }

//   const SaveTask=(myid,task)=>{
//     dispatch(editTask({id:myid,Task:task}))
//     setval("")
//     setbtn(true)
//   }





// let sno=0;
//   const ans=task.map((key)=>{
//     sno++
//     return(
//       <>
      
//       <tr>
//         <td>{sno}</td>
//         <td>{key.complete?<span style={{textDecoration:"line-through",color:"red"}}>{key.Task}</span>:key.Task}</td>
//         <td>
//           <button onClick={()=>{TaskDelete(key.id)}}>Delete</button>
//         </td>

//           <td>
//           <button onClick={()=>{TaskComplete(key.id)}}>Complete</button>
//         </td>

//          <td>
//           <button onClick={()=>{TaskInComplete(key.id)}}>Incomplete</button>
//         </td>

//         <td>
//           <button onClick={()=>{TaskEdit(key.id,key.Task)}}>EditTask</button>
//         </td>
//       </tr>
//       </>
//     )

//   })
//   return(
//   <>
  
//   <h1> React Todo App</h1>

//   <input type="text" placeholder="Enter your task"  value={val}  onChange={(e)=>{setval(e.target.value)}}/>

// {
//   btn?  <button   onClick={AddTask}>Add Task</button>:  <button   onClick={()=>{SaveTask(edt,val)}}>SaveTask</button>
// }

//   {ans}
  
//   </>
//   )
// }

// export default App;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addData,
  deleteData,
  editTask,
  workComplete,
  workInComplete,
} from "./TodoApp/createSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css"; // custom CSS

const App = () => {
  const [val, setval] = useState("");
  const [btn, setbtn] = useState(true);
  const [edt, setedt] = useState("");
  const task = useSelector((state) => state.mytodo.todo);
  const dispatch = useDispatch();

  const AddTask = () => {
    if (val.trim() === "") {
      toast.error("Please enter a task");
      return;
    }
    dispatch(addData({ id: Date.now(), Task: val }));
    toast.success("Task Added!");
    setval("");
  };

  const TaskDelete = (id) => {
    dispatch(deleteData(id));
    toast.warn("Task Deleted!");
  };

  const TaskComplete = (id) => {
    dispatch(workComplete(id));
    toast.success("Marked as Completed!");
  };

  const TaskInComplete = (id) => {
    dispatch(workInComplete(id));
    toast.info("Marked as Incomplete!");
  };

  const TaskEdit = (id, Task) => {
    setval(Task);
    setedt(id);
    setbtn(false);
  };

  const SaveTask = (myid, task) => {
    if (task.trim() === "") {
      toast.error("Cannot save empty task!");
      return;
      
    }
    dispatch(editTask({ id: myid, Task: task }));
    setval("");
    setbtn(true);
    toast.success("Task Updated!");
  };

  let sno = 0;
  const ans = task.map((key) => {
    sno++;
    return (
      <tr key={key.id}>
        <td>{sno}</td>
        <td>
          {key.complete ? (
            <span className="completed">{key.Task}</span>
          ) : (
            key.Task
          )}
        </td>
        <td>
          <button className="btn delete" onClick={() => TaskDelete(key.id)}>
            Delete
          </button>
        </td>
        <td>
          <button className="btn complete" onClick={() => TaskComplete(key.id)}>
            Complete
          </button>
        </td>
        <td>
          <button className="btn incomplete" onClick={() => TaskInComplete(key.id)}>
            Incomplete
          </button>
        </td>
        <td>
          <button className="btn edit" onClick={() => TaskEdit(key.id, key.Task)}>
            Edit
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container">
      <h1 className="title">🚀 React Redux Todo App</h1>

      <div className="input-area">
        <input
          type="text"
          placeholder="✍️ Enter your task"
          value={val}
          onChange={(e) => setval(e.target.value)}
        />
        {btn ? (
          <button className="btn add" onClick={AddTask}>
            Add Task
          </button>
        ) : (
          <button className="btn save" onClick={() => SaveTask(edt, val)}>
            Save Task
          </button>
        )}
      </div>

      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Task</th>
            <th colSpan="4">Actions</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default App;
