const List = ({task}: any) =>{
    const {title, isCompleted} = task
    return(
        <>
            <li className={isCompleted ? "checked" : ""}>{title}</li>
        </>
    );
}

export default List;