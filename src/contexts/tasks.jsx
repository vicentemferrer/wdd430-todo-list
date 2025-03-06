import { useEffect, useState } from 'react';
import { TasksContext } from './contexts.js';
import { TASK_STATUS } from '../consts.js';
import { getFromLocalStorage, saveToLocalStorage } from '../utils/storage.js';

export default function TasksProvider({ children }) {
	const [tasks, setTasks] = useState(getFromLocalStorage('tasks') || []);

	useEffect(() => {
		saveToLocalStorage('tasks', tasks);
	}, [tasks]);

	const createTask = (input) => {
		setTasks((prevState) => [
			...prevState,
			{ id: crypto.randomUUID(), name: input, status: TASK_STATUS.PENDING }
		]);
	};

	const updateTask = (id) => {
		setTasks((prevState) => {
			const taskIndex = prevState.findIndex((task) => task.id === id);

			const newState = [...prevState];
			const prevTask = newState[taskIndex];
			const prevTaskStatus = prevTask.status;

			newState[taskIndex] = {
				...prevTask,
				status: prevTaskStatus === TASK_STATUS.PENDING ? TASK_STATUS.DONE : TASK_STATUS.PENDING
			};

			return newState;
		});
	};

	const deleteTask = (id) => {
		setTasks((prevState) => {
			const taskIndex = prevState.findIndex((task) => task.id === id);

			const newState = structuredClone(prevState);

			return newState.slice(0, taskIndex).concat(newState.slice(taskIndex + 1));
		});
	};

	return (
		<TasksContext.Provider value={{ tasks, createTask, updateTask, deleteTask }}>
			{children}
		</TasksContext.Provider>
	);
}
