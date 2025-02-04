function renderDataFromApi(url, renderFunc) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderFunc(data);
    });
}

function displayMaidenName(user) {
  let h1 = document.createElement("h1");
  h1.textContent = `${user.maidenName}`;
  document.body.appendChild(h1)
}

renderDataFromApi("https://dummyjson.com/users/1", displayMaidenName);
