import React from 'react';
import ListItem from "./ListItem";

const TodoList = () => {
    const TASKS = [
        { title: 'hit the gym', isCompleted: true },
        { title: 'Pay bills', isCompleted: true },
        { title: 'Meet George', isCompleted: false },
        { title: 'Buy eggs', isCompleted: false },
        { title: 'Read a book', isCompleted: true },
        { title: 'Organize office', isCompleted: false },
        { title: 'go for shopping', isCompleted: true }
    ]
    return (
        <ul id="myUL">
            {TASKS.map(obj => (
                <ListItem task={obj} />
            ))}
        </ul>
    )
}

export default TodoList;