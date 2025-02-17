import Config from "../config.js";
const dataFilePath = '/db/data.json';
export async function getData() {
    const response = await fetch(dataFilePath);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const jsonData = await response.json();
    if (typeof jsonData.counter !== 'number') {
        throw new Error('Invalid data format');
    }
    return jsonData.counter;
}
export async function updateData() {
    if (Config.isGithub) {
        return;
    }
    const currentValue = await getData();
    const newValue = currentValue + 1;
    const response = await fetch(dataFilePath, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ counter: newValue }),
    });
    if (!response.ok) {
        throw new Error('Failed to update data');
    }
}
