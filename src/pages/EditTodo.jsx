import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { editTodo, getOneTodo } from "../services/APIFunctions";

export default function EditTodo () {
    const { id } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState({});

    useEffect(() => {
        getOneTodo(id)
        .then(res => setData(res.data))
    }, []);

    const changeTodo = (event) => {
        event.preventDefault();
        const updatedTodo = {description: event.target.description.value, complete: event.target.complete.checked};
        editTodo(id, updatedTodo);
        navigate(`/${id}`);
    };

    return(
        <div>
            <h2>Edit Task:</h2>
            <form onSubmit={changeTodo}>
                <input type="text" name="description" defaultValue={data.description} /> <br/>
                Completed:
                <input type="checkbox" name="complete" defaultChecked={data.complete} />
            </form>
        </div>
    );
};