// Grab the main form controls and result areas from the page.
const filterForm = document.getElementById("filter-form");
const styleFilter = document.getElementById("style-filter");
const resetButton = document.getElementById("reset-button");
const resultsContainer = document.getElementById("results-container");
const resultsMessage = document.getElementById("results-message");

// Build a Google Maps search link using the business name and address.
function getGoogleMapsUrl(place) {
    // Combining both fields helps Google Maps find the business more accurately.
    const searchQuery = `${place.name} ${place.address}`.trim();
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchQuery)}`;
}

// Create one result card for a pizza place.
function createPizzaCard(place) {
    const article = document.createElement("article");
    article.classList.add("result-card");

    // If there is an address, turn the name into a Google Maps link.
    const nameMarkup = place.address
        ? `<a class="name-link" href="${getGoogleMapsUrl(place)}" target="_blank" rel="noopener noreferrer">${place.name}</a>`
        : place.name;

    // Show fallback text if the address field is blank.
    const addressMarkup = place.address || "Not available";

    article.innerHTML = `
        <h3>${nameMarkup}</h3>
        <p><strong>Neighbourhood:</strong> ${place.neighbourhood}</p>
        <p><strong>Style:</strong> ${place.style.join(", ")}</p>
        <p><strong>Address:</strong> ${addressMarkup}</p>
        <p>${place.description}</p>
    `;

    return article;
}

// Show the current list of matching pizza places on the page.
function displayResults(places) {
    // Clear the old results before adding the new ones.
    resultsContainer.innerHTML = "";

    if (places.length === 0) {
        resultsMessage.textContent = "No pizza places matched this style.";
        return;
    }

    // Update the message so the user knows how many matches were found.
    resultsMessage.textContent = `${places.length} pizza place(s) found.`;

    places.forEach(function(place) {
        const card = createPizzaCard(place);
        resultsContainer.appendChild(card);
    });
}

// Filter the pizza places based on the selected style.
function filterPizzaPlaces() {
    const selectedStyle = styleFilter.value;

    // Keep everything when "all" is selected, otherwise match the chosen style.
    const filteredPlaces = pizzaPlaces.filter(function(place) {
        return selectedStyle === "all" || place.style.includes(selectedStyle);
    });

    displayResults(filteredPlaces);
}

// Update the results whenever the style dropdown changes.
styleFilter.addEventListener("change", function() {
    filterPizzaPlaces();
});

// Reset the filter and show the full list again.
resetButton.addEventListener("click", function() {
    styleFilter.value = "all";
    resultsMessage.textContent = "Showing all pizza places.";
    displayResults(pizzaPlaces);
});

// Show all pizza places when the page first loads.
// displayResults(pizzaPlaces);
