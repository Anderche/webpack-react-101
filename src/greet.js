import { capitalize } from './capitalize.js';

const greet = (firstName) => {
	return `Hello ${capitalize(firstName)}`	
}

export { greet };
