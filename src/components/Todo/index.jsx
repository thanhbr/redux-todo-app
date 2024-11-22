import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import todoListSlice from "../TodoList/todoListSlice"

const Todo = ({
    id,
    name = "Learn Redux",
    priority = "Medium",
    completed = false
}) => {
    Todo.propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        priority: PropTypes.string.isRequired,
        completed: PropTypes.bool,
    };

    const dispatch = useDispatch()

    const [checked, setChecked] = useState(completed)

    const handleToggleTodo = (id) => {
        setChecked(!checked)
        dispatch(todoListSlice.actions.toggleTodoStatus(id))
    }

    return (
        <div 
            onClick={() => handleToggleTodo(id)} 
            className={`flex justify-between ${completed && 'line-through'}`}
        >
            <div className='flex gap-2'>
                <input type="checkbox" defaultChecked={checked} />
                <p>{name}</p>
            </div>
            <p>{priority}</p>
        </div>
    )
}

export default Todo
