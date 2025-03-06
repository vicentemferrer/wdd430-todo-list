import { createRoot } from 'react-dom/client';
import TasksProvider from './contexts/tasks.jsx';
import App from './App.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
	<TasksProvider>
		<App />
	</TasksProvider>
);
