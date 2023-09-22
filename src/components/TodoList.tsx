import React from 'react';
import ListItem from "./ListItem";

const TodoList = ({tasks}: any) => {

    return (
        <ul id="myUL">
            {tasks.map((obj: any, key: any) => (
                <ListItem key={key} task={obj} />
            ))}
        </ul>
    )
}

export default TodoList;