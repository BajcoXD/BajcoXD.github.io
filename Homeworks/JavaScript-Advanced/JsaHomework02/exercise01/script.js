function fetchPlanets(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayPlanets(data.results));
}

function displayPlanets(planets) {
  const tableBody = document.getElementById("planetTableBody");
  tableBody.innerHTML = "";
  planets.slice(0, 10).forEach((planet) => {
    let row = `<tr>
            <td>${planet.name}</td>
            <td>${planet.population}</td>
            <td>${planet.climate}</td>
            <td>${planet.gravity}</td>
        </tr>`;
    tableBody.innerHTML += row;
  });
}
