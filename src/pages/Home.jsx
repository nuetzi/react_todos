import { useState, useEffect } from "react";
import { getTodos } from "../services/APIFunctions";

export default function Todos () {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos()
            .then((res) => setTodos(res.data))
            .catch((err) => err.message)
    }, []);

    console.log(Todos)

    return (
        <div className="todosContainer">
            <ul>
            {todos.map((each, i) => {
                return(
                    <li key={i}>
                        <a href={`${each._id}`} > {each.description} </a>
                    </li>
                );
            })}
            </ul>                
        </div>
    );
};