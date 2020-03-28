export function getUsersFromBdd() {
	return fetch('http://localhost:3000/users', {
		mode: 'cors'
	})
		.then((response) => response.json())
		.catch((error) => console.log(error))
}