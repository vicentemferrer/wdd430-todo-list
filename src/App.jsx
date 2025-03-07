import Form from './components/Form.jsx';
import ToDoList from './components/ToDoList.jsx';

function App() {
	return (
		<>
			<main>
				<Form />
				<h1 className='header'>WDD 430 To-Do List</h1>
				<ToDoList />
			</main>
			<footer>&copy;{new Date().getFullYear()} WDD 430 - Vicente Ferrer</footer>
		</>
	);
}

export default App;
