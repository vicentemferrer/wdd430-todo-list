import { useTaskInput } from './hooks/useTaskInput.js';
import { useTasks } from './hooks/useTasks.js';
import Task from './components/Task.jsx';

function App() {
	const { input, handleInputChange, clearInput } = useTaskInput();
	const { tasks, createTask } = useTasks();

	const taskElements = tasks.map((task) => <Task key={task.id} {...task} />);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!input) return;
		createTask(input);
		clearInput();
	};

	return (
		<>
			<main>
				<form onSubmit={handleSubmit} className='new-item-form'>
					<label className='form-row'>
						New Task
						<input type='text' value={input} onChange={handleInputChange} autoFocus />
					</label>
					<button className='btn'>Add</button>
				</form>
				<h1 className='header'>WDD 430 To-Do List</h1>
				<ul className='list'>{taskElements}</ul>
			</main>
			<footer>&copy;{new Date().getFullYear()} WDD 430 - Vicente Ferrer</footer>
		</>
	);
}

export default App;
