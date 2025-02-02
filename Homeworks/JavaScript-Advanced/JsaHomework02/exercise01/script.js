let currentPage = 1;

function fetchPlanets(page) {
  fetch(`https://swapi.py4e.com/api/planets/?page=${page}`)
    .then((response) => response.json())
    .then((data) => {
      displayPlanets(data.results);
      toggleButtons();
    });
}

function displayPlanets(planets) {
  document.getElementById("planetTableBody").innerHTML = planets
    .map(
      (planet) => `<tr>
        <td>${planet.name}</td>
        <td>${planet.population}</td>
        <td>${planet.climate}</td>
        <td>${planet.gravity}</td>
      </tr>`
    )
    .join("");
}

function toggleButtons() {
  let nextButton = document.getElementById("nextButton");
  let prevButton = document.getElementById("prevButton");

  if (!nextButton) {
    nextButton = document.createElement("button");
    nextButton.id = "nextButton";
    nextButton.textContent = "NEXT 10";
    nextButton.onclick = () => {
      currentPage = 2;
      fetchPlanets(currentPage);
    };
    document.body.appendChild(nextButton);
  }

  if (!prevButton) {
    prevButton = document.createElement("button");
    prevButton.id = "prevButton";
    prevButton.textContent = "PREVIOUS 10";
    prevButton.onclick = () => {
      currentPage = 1;
      fetchPlanets(currentPage);
    };
    prevButton.style.display = "none";
    document.body.appendChild(prevButton);
  }

  nextButton.style.display = currentPage === 1 ? "block" : "none";
  prevButton.style.display = currentPage === 2 ? "block" : "none";
}
