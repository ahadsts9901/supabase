import "./index.css"
import { supabase } from "../../../config/supabase"
import { ChangeEvent, FormEvent, Fragment, useEffect, useState } from "react"
import Todo from "./Todo"

const Body = ({ user }: any) => {
    const [todo, set_todo] = useState("")
    const [todos, set_todos] = useState([])

    useEffect(() => {
        get()
    }, [])

    const create = async (e: FormEvent) => {
        e.preventDefault()

        if (!todo) {
            alert("Todo is required")
            return
        }

        const { error } = await supabase
            .from('todos')
            .insert({
                todo: todo,
                user_id: user?.id
            })

        if (error) {
            alert(error?.message)
        }
        set_todo("")
        get()

    }

    const get = async () => {
        const { data, error }: any = await supabase
            .from('todos')
            .select()
            .order('created_at', { ascending: false })
        if (error) {
            alert(error?.message)
        }
        set_todos(data)
    }

    return (
        <Fragment>
            <form className="body-form" onSubmit={create}>
                <input type="text" value={todo} onChange={(e: ChangeEvent<HTMLInputElement>) => set_todo(e?.target?.value)} placeholder="Enter todo" />
                <button type="submit">Add Todo</button>
            </form>
            <div className="todos">
                {todos.map((t: any, i: number) => <Todo key={i} data={t} get={get} />)}
            </div>
        </Fragment>
    )
}

export default Body