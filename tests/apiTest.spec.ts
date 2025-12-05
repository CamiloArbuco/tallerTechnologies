async function getRequest(url: string) {
  const response = await fetch(url);

  if (!response.status.toString().startsWith('2')) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  return response.json();
}

async function validateApi() {
  const data = await getRequest('https://jsonplaceholder.typicode.com/posts/1');


  const requiredKeys = ['userId', 'id', 'title', 'body'];
  for (const key of requiredKeys) {
    if (!(key in data)) {
      throw new Error(`Missing key in response: ${key}`);
    }
  }

  
  if (data.id !== 1) {
    throw new Error(`Expected id to be 1 but got ${data.id}`);
  }

  console.log('All tests passed');
}


validateApi().catch((err) => console.error(err.message));