import { useNavigate } from "react-router-dom";
import { createTodo } from "../services/APIFunctions";

export default function NewTodo () {
    const navigate = useNavigate();

    const makeNewTodo = (item) => {
        item.preventDefault();
        const newTodo = {description: document.querySelector("#desc").value, complete: false};
        createTodo(newTodo);
        navigate("/");
    };

    const goBack = () => {
        navigate("/");
    }

    return(
        <div>
            <h2>Add New Task:</h2>
            <form onSubmit={makeNewTodo}>
                <input type="text" name="description" id="desc" /> &nbsp;
                <input type="submit" />
            </form>
            <br/>
            <button onClick={goBack}>RETURN</button>
        </div>
    )
}