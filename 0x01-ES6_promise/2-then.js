export default function handleResponseFromAPI(promise) {
  return promise.then((_) => ({
    status: 200,
    body: 'success',
  })).catch((_) => Error()).finally(() => {
    console.log('Got a response from the API');
  });
}
