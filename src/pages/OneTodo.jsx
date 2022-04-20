import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneTodo, deleteTodo, editTodo } from "../services/APIFunctions";


export default function OneTodo () {
    const navigate = useNavigate();
    const { id } = useParams();

    const [oneTodo, setOneTodo] = useState({});

    useEffect(() => {
        getOneTodo(id)
        .then(res => setOneTodo(res.data))
    }, []);

    const editItem = () => {
        editTodo(id);
        navigate(`/${id}`);
    }

    const deleteItem = () => {
        deleteTodo(id);
        navigate("/");
    };

    return(
        <div>
            <h3>{oneTodo.description}</h3>
            <button onClick={editItem}>EDIT</button>
            <button onClick={deleteItem}>DELETE</button>
        </div>
    );
}