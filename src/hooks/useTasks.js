import { useContext } from 'react';
import { TasksContext } from '../contexts/contexts.js';

export function useTasks() {
	const { tasks, createTask, updateTask, deleteTask } = useContext(TasksContext);

	return { tasks, createTask, updateTask, deleteTask };
}
