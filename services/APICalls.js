export default function routeCall(url, method, userInput) {
  if(method === 'get') {
    return fetch(url)
      .then(res => {
        return res.json();
      });
  }
  return fetch(url, {
    method: String.toUpperCase(method),
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userInput)
  });
}