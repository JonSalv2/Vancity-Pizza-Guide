const filterForm = document.getElementById("filter-form");
const styleFilter = document.getElementById("style-filter");
const resetButton = document.getElementById("reset-button");
const resultsContainer = document.getElementById("results-container");
const resultsMessage = document.getElementById("results-message");

function createPizzaCard(place) {
    const article = document.createElement("article");
    article.classList.add("result-card");

    article.innerHTML = `
        <h3>${place.name}</h3>
        <p><strong>Neighbourhood:</strong> ${place.neighbourhood}</p>
        <p><strong>Style:</strong> ${place.style.join(", ")}</p>
        <p><strong>Address:</strong> ${place.address}</p>
        <p>${place.description}</p>
    `;

    return article;
}

function displayResults(places) {
    resultsContainer.innerHTML = "";

    if (places.length === 0) {
        resultsMessage.textContent = "No pizza places matched this style.";
        return;
    }

    resultsMessage.textContent = `${places.length} pizza place(s) found.`;

    places.forEach(function(place) {
        const card = createPizzaCard(place);
        resultsContainer.appendChild(card);
    });
}

function filterPizzaPlaces() {
    const selectedStyle = styleFilter.value;

    const filteredPlaces = pizzaPlaces.filter(function(place) {
        return selectedStyle === "all" || place.style.includes(selectedStyle);
    });

    displayResults(filteredPlaces);
}

styleFilter.addEventListener("change", function() {
    filterPizzaPlaces();
});

resetButton.addEventListener("click", function() {
    styleFilter.value = "all";
    resultsMessage.textContent = "Showing all pizza places.";
    displayResults(pizzaPlaces);
});

displayResults(pizzaPlaces);