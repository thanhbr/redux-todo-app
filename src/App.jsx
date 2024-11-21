import Filters from './components/Filters'
import TodoList from './components/TodoList'

function App() {
return (
	<div className='bg-slate-300 p-8 flex flex-col gap-4 rounded-lg w-fit mx-auto my-[200px]'>
		<p className='text-lg font-bold text-center'>TODO APP with REDUX</p>
		<Filters />
		<TodoList />
	</div>
)
}

export default App
