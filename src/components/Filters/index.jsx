import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { priorityFilterChange, searchFilterChange, statusFilterChange } from "../../redux/actions"
import { filterPrioritySelector } from "../../redux/selectors"

const Filters = () => {
    const [searchText, setSearchText] = useState("")
    const [status, setStatus] = useState("all")
    const [priority, setPriority] = useState([])

    const priorities = useSelector(filterPrioritySelector)

    const dispatch = useDispatch()

    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value)
        dispatch(searchFilterChange(e.target.value))
    }

    const handleStatusChange = (value) => {
        setStatus(value)
        dispatch(statusFilterChange(value))
    }

    const handlePriorityChange = (value) => {
        const temp = [...priorities]
        const priority = temp.includes(value) 
            ? temp.filter(priority => priority !== value) 
            : [...temp, value]
        setPriority(priority)
        dispatch(priorityFilterChange(priority))
    }

    return (
        <div>
            <div className="flex gap-4">
                <p className="font-semibold">Search</p>
                <input type="text" 
                        placeholder="Search" 
                        value={searchText}
                        onChange={handleSearchTextChange}
                        className="border-2 rounded-lg" 
                />
            </div>
            <div>
                <p className="text-left font-semibold">Filter by status</p>
                <div className="flex justify-between gap-4">
                    <div className="flex gap-2" onClick={() => handleStatusChange("all")}>
                        <input defaultChecked={status === "all"} 
                                id="all-status" 
                                name="status" 
                                type="radio" 
                                value="all" 
                        />
                        <label htmlFor="all-status">All</label>
                    </div>
                    <div className="flex gap-2" onClick={() => handleStatusChange("completed")}>
                        <input defaultChecked={status === "completed"} 
                                id="completed-status" 
                                name="status" 
                                type="radio" 
                                value="completed" 
                        />
                        <label htmlFor="completed-status">Completed</label>
                    </div>
                    <div className="flex gap-2" onClick={() => handleStatusChange("todo")}>
                        <input defaultChecked={status === "todo"} 
                                id="todo-status" 
                                name="status" 
                                type="radio" 
                                value="todo" 
                        />
                        <label htmlFor="todo-status">Todo</label>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-left font-semibold">Filter by priority</p>
                <div>
                    <div className="flex gap-2" onClick={() => handlePriorityChange("High")} >
                        <input defaultChecked={priority.includes("High")} 
                                id="high-priority" 
                                name="priority" 
                                type="checkbox" 
                                value="High"
                        />
                        <label htmlFor="high-priority">High</label>
                    </div>
                    <div className="flex gap-2" onClick={() => handlePriorityChange("Medium")} >
                        <input defaultChecked={priority.includes("Medium")} 
                                id="medium-priority" 
                                name="priority" 
                                type="checkbox" 
                                value="Medium"
                        />
                        <label htmlFor="medium-priority">Medium</label>
                    </div>
                    <div className="flex gap-2" onClick={() => handlePriorityChange("Low")} >
                        <input defaultChecked={priority.includes("Low")} 
                                id="low-priority" 
                                name="priority" 
                                type="checkbox" 
                                value="Low"         
                        />
                        <label htmlFor="low-priority">Low</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters
