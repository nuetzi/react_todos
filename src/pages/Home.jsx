import { useState, useEffect } from "react";
import { getTodos } from "../services/APIFunctions";

export default function Todos () {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos()
            .then((res) => setTodos(res.data))
            .catch((err) => err.message)
    }, []);

    return (
        <div className="todosContainer">
            <ul>
            {todos.map((each, i) => {
                return(
                    (each.complete)
                    ?   <li key={i} style={{textDecoration:"line-through"}}>
                            <a href={`${each._id}`} > {each.description}</a>
                        </li>
                    :   <li key={i} style={{backgroundColor:"yellow"}}>
                            <a href={`${each._id}`} > {each.description} </a>
                        </li>
                );
            })}
            </ul>                
        </div>
    );
};