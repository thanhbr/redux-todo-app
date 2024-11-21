import { createSelector } from "reselect"

export const searchTextSelector = (state) => state.filters.search
export const filterStatusSelector = (state) => state.filters.status
export const filterPrioritySelector = (state) => state.filters.priority
export const todoListSelector = (state) => state.todoList

export const todosRemainingSelector = createSelector(
    [todoListSelector, searchTextSelector, filterStatusSelector, filterPrioritySelector],
    (todoList, searchText, status, priorities) => {
        return todoList.filter(todo => {
            if(status === "all") {
                return priorities.length === 0 
                        ? todo.name.toLowerCase().includes(searchText.toLowerCase()) 
                        : todo.name.toLowerCase().includes(searchText.toLowerCase()) && priorities.includes(todo.priority)
            } 
            return todo.name.toLowerCase().includes(searchText.toLowerCase()) && status === "completed" ? todo.completed : !todo.completed
        })
    }
)
