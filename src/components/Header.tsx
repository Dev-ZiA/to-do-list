import AddItem from "./AddItem";

const Header = () =>{
    return(
        <>
         <div id="myDIV" className="header">
            <h2 style={{margin:"5px"}}>My To Do List</h2>
            <input type="text" id="myInput" placeholder="Title..."/>
            
         </div>
         <AddItem/>
        </>
    );
}

export default Header;