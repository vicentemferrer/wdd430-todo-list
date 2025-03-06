import { useTasks } from '../hooks/useTasks.js';
import { TASK_STATUS } from '../consts.js';

export default function Task({ id, status, name }) {
	const { updateTask, deleteTask } = useTasks();

	return (
		<li>
			<label>
				<input
					type='checkbox'
					onChange={() => updateTask(id)}
					checked={status === TASK_STATUS.DONE}
				/>
				{name}
			</label>

			<button className='btn btn-danger' onClick={() => deleteTask(id)}>
				Delete
			</button>
		</li>
	);
}
