export async function getClients() {
	const url = import.meta.env.VITE_API_URL;

	const response = await fetch(url);
	const result = await response.json();
	return result;
}

export async function getClient(id) {
	const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
	const result = await response.json();
	return result;
}

export async function addClient(data) {
	try {
		const response = await fetch(import.meta.env.VITE_API_URL, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		await response.json();
	} catch (error) {
		console.log(error);
	}
}

export async function updateClient(id, data) {
	try {
		const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
			method: 'PUT',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		await response.json();
	} catch (error) {
		console.log(error);
	}
}
