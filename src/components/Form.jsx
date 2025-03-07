import { useTaskInput } from '../hooks/useTaskInput.js';
import { useTasks } from '../hooks/useTasks.js';

export default function Form() {
	const { input, handleInputChange, clearInput } = useTaskInput();
	const { createTask } = useTasks();

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!input) return;
		createTask(input);
		clearInput();
	};

	return (
		<form onSubmit={handleSubmit} className='new-item-form'>
			<label className='form-row'>
				New Task
				<input type='text' value={input} onChange={handleInputChange} autoFocus />
			</label>
			<button className='btn'>Add</button>
		</form>
	);
}
