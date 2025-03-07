import { useTasks } from '../hooks/useTasks.js';
import Task from './Task.jsx';

export default function ToDoList() {
	const { tasks } = useTasks();

	const taskElements = tasks.map((task) => <Task key={task.id} {...task} />);

	return <ul className='list'>{taskElements}</ul>;
}
