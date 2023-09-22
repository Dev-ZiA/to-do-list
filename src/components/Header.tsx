'user client'
import React from "react";
import AddItem from "./AddItem";

const Header = ({addTask}: any) => {
    return (
        <>
            <div id="myDIV" className="header">
                <h2 style={{ margin: "5px" }}>My To Do List</h2>

                <AddItem addTask={addTask} />
                
            </div>
        </>
    );
}

export default Header;