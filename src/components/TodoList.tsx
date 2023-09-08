import ListItem from "./ListItem";

const TodoList = () =>{
    return(
        <>
        
        <ul id="myUL">
            <ListItem task="Pay the bills"/>
            <ListItem task="Hit the gym"/>
            <ListItem task="Meet mayodin"/>
            <ListItem task="Outing"/>
         </ul>
        </>
    );
}

export default TodoList;