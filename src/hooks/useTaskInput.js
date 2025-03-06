import { useState } from 'react';

export function useTaskInput() {
	const [input, setInput] = useState('');

	const handleInputChange = (event) => {
		const content = event.target.value;
		if (content === ' ') return;
		setInput(content);
	};

	const clearInput = () => setInput('');

	return { input, handleInputChange, clearInput };
}
