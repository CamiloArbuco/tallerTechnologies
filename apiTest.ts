async getRequest(url: string) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    if (!response.status.toString().startsWith('2')) {
        throw new Error(`Request failed with status ${response.status}`);   
    }
    return response.json();
}
