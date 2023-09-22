'user client'
import React, { useState } from "react";

const AddItem = ({addTask}: any) => {
  
const [task, setTask] = useState('');

const handleInput = () => {
    if(task.length > 3){
        addTask(task);
        setTask('');
    }else{
        alert('TAsk\'s length must be greater than 3');
    }
}
    return (
        <>
            <input 
            type="text"
            placeholder="Add Task..." 
            value = {task}
            onChange={(e) => setTask(e.target.value)}
            />
            <span 
                onClick={() => handleInput() }
            className="addBtn">Add</span>
        </>
    );
}

export default AddItem;