const submitBtn = document.getElementById('submit-url-btn');
submitBtn.addEventListener('click', async () => {
  console.log('sending the input value to the api route');
  const inputurl = document.getElementById('videoURL');
  const reqParams = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      url: inputurl.value,
    }),
  };
  const response = await fetch('/api/new-recommendation', reqParams);
  const data = await response.json();
  console.log('the data that comes back is: ', data);
});
