import { supabase } from "../../../config/supabase"
import "./index.css"

const Todo = ({ data, get }: any) => {

    const delTodo = async () => {
        const id = data?.id
        if (!id) return
        const { error } = await supabase
            .from('todos')
            .delete()
            .eq('id', id)
        if (error) {
            alert(error?.message)
            return
        }
        get()

    }

    const updateTodo = async () => {
        const id = data?.id
        if (!id) return
    }

    return (
        <div className="todo">
            <p>{data?.todo}</p>
            <div className="button-cont">
                <button className="success" onClick={updateTodo}>Edit</button>
                <button className="error" onClick={delTodo}>Delete</button>
            </div>
        </div>
    )
}

export default Todo