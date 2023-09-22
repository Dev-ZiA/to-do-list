'use client'
import React, { useEffect, useState } from 'react';

const TheMain = () => {

    const [todos, setTodos] = useState<any[]>([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        const apiUrl = `http://localhost:8000/todos`;
        fetch(apiUrl, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                setTodos(data);
            })
            .catch(error => `Fatel Error`);
    }, [])

    const addTodo = () => {

        if (title.length > 0) {
            const todo = { title: title, completed: false };
            const apiUrl = `http://localhost:8000/todos`;
            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(todo)
            })
                .then(response => response.json())
                .then(data => {
                    setTodos(prev => {
                        return [...prev, data]
                    })
                })
                .catch(error => `Fatel Error`);
            setTitle('');
        } else {
            alert('Title is Required!');
        }
    }

    const updateTodo = (todo: any) => {
        console.log(todo)
        const apiUrl = `http://localhost:8000/todos/${todo.id}`;
        fetch(apiUrl, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ...todo, completed: !todo.completed })
        })
            .then(response => response.json())
            .catch(error => `Fatal Error`);

        setTodos(prev => {
            return prev.map(todoObj => {
                if (todoObj.id == todo.id) {
                    return { ...todoObj, completed: !todo.completed };
                } else {
                    return todoObj;
                }
            });
        })
    }

    const deleteTodo = (id: any) => {
        const apiUrl = `http://localhost:8000/todos/${id}`;
        fetch(apiUrl, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .catch(error => `Fatal Error`);

        setTodos(prev => {
            return prev.filter(todo => {
                return todo.id != id;
            });
        })
    }

    return (
        <>
            <div id="myDIV" className="header">
                <h2 style={{ margin: '5px' }}>My To Do List</h2>
                <input
                    type="text"
                    value={title}
                    placeholder="Title..."
                    onChange={(e) => setTitle(e.target.value)} />
                <span
                    className="addBtn"
                    onClick={() => addTodo()}>Add</span>
            </div>

            <ul id="myUL">
                {todos.map((todo: any, key: any) => (
                    <li key={key}
                        className={todo.completed ? 'checked' : ''}
                        onClick={() => updateTodo(todo)}
                    >{todo.title}
                        <span
                            className="close"
                            onClick={() => deleteTodo(todo.id)}>x</span>
                    </li>
                ))}
            </ul>
        </>

    );
};

export default TheMain;