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

    const goBack = () => {
        navigate("/");
    }

    const editItem = () => {
        editTodo(id);
        navigate(`/${id}/edit`);
    }

    const deleteItem = () => {
        deleteTodo(id);
        navigate("/");
    };

    return(
        <div>
            <h3>{oneTodo.description}</h3>
            Complete? <input type="checkbox" checked={oneTodo.complete} /> <br/>
            <br/>
            <button onClick={goBack}>RETURN</button> <br/>
            <br/>
            <button onClick={editItem}>EDIT</button> <br/>
            <button onClick={deleteItem}>DELETE</button>
        </div>
    );
}