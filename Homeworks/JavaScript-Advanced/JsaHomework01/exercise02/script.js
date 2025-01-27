const apiUrl = "https://swapi.dev/api/people/1";
const fetchStarWarsBtn = document.querySelector("#fetchStarWarsBtn");
const characterNameElement = document.querySelector("#characterName");
const characterStatsTable = document.querySelector("#characterStats tbody");

fetchStarWarsBtn.addEventListener("click", function () {
  fetch(apiUrl)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Failed to fetch character data");
      }
      return response.json();
    })
    .then(function (data) {
      // Display character name
      characterNameElement.textContent = data.name;

      // Clear previous stats
      characterStatsTable.innerHTML = "";

      // Populate the table with stats
      const stats = [
        { stat: "Height", value: data.height },
        { stat: "Weight", value: data.mass },
        { stat: "Eye Color", value: data.eye_color },
        { stat: "Hair Color", value: data.hair_color },
      ];

      stats.forEach(function (stat) {
        const row = document.createElement("tr");
        const statCell = document.createElement("td");
        const valueCell = document.createElement("td");

        statCell.textContent = stat.stat;
        valueCell.textContent = stat.value;

        row.appendChild(statCell);
        row.appendChild(valueCell);
        characterStatsTable.appendChild(row);
      });
    })
    .catch(function (error) {
      console.log("ERROR:", error);
      characterNameElement.textContent = "Failed to load character data";
    });
});
