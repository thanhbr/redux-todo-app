import { useDispatch, useSelector } from "react-redux"
import { v4 as uuidv4 } from 'uuid'
import Todo from "../Todo"
import { addTodo } from "../../redux/actions"
import { useState } from "react"
import { todosRemainingSelector } from "../../redux/selectors"

const TodoList = () => {
    const [todoName, setTodoName] = useState("")
    const [priority, setPriority] = useState("Medium")

    const todoList = useSelector(todosRemainingSelector)

    const dispatch = useDispatch()

    const handleAddTodo = () => {
        dispatch(addTodo({
            id: uuidv4(),
            name: todoName,
            priority: priority,
            completed: false,
        }))
        setTodoName("")
        setPriority("Medium")
    }

    const handleNameChange = (e) => {
        setTodoName(e.target.value)
    }

    const handlePriorityChange = (e) => {
        setPriority(e.target.value)
    }

    return (
        <div className="flex flex-col gap-8 mt-8">
            <div>
                {todoList.map(todo => {
                    return <Todo key={todo.id} {...todo} />
                })}
            </div>
            <div className="flex justify-between gap-4">
                <input 
                    placeholder="Add todo" 
                    className="border-2 rounded-lg p-2" 
                    value={todoName}
                    onChange={handleNameChange}
                />
                <select 
                    className="rounded-md" 
                    value={priority}
                    onChange={handlePriorityChange}
                >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <button type="primary" 
                        className="bg-lime-500 text-white" 
                        onClick={handleAddTodo}
                >
                    Add
                </button>
            </div>
        </div>
    )
}

export default TodoList
