export default function routeCall(url, method, userInput) {
  if(method === 'get') {
    return fetch(url)
      .then(res => {
        return res.json();
      });
  }

  return fetch(url, {
    method: method.toUpperCase(),
    headers: {
      'Content-Type': 'application/json'
    },
    body: userInput
  })
    .then(res => {
      return res.json();
    });

  //fix delete / get later 

}