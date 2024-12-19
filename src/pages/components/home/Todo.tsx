import "./index.css"

const Todo = ({ data }: any) => {
    console.log(data)

    const delTodo = async () => {
        const id = data?.id
        if (!id) return
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