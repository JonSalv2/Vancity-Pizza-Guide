const styleFilter = document.getElementById("style-filter");
const showAllButton = document.getElementById("reset-button");
const resultsContainer = document.getElementById("results-container");
const resultsMessage = document.getElementById("results-message");

// Only wire up the search logic when the page includes the expected controls.
if (styleFilter && showAllButton && resultsContainer && resultsMessage) {
  // Build a Google Maps search link using the business name and address.
  function getGoogleMapsUrl(place) {
    const searchQuery = `${place.name} ${place.address}`.trim();
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchQuery)}`;
  }

  // Create one result card for a pizza place.
  function createPizzaCard(place) {
    const article = document.createElement("article");
    const neighbourhoodMarkup = place.neighbourhood || "Not available";
    const addressMarkup = place.address || "Not available";
    const nameMarkup = place.address
      ? `<a class="name-link" href="${getGoogleMapsUrl(place)}" target="_blank" rel="noopener noreferrer">${place.name}</a>`
      : place.name;

    article.classList.add("result-card");
    article.innerHTML = `
      <h3>${nameMarkup}</h3>
      <p><strong>Neighbourhood:</strong> ${neighbourhoodMarkup}</p>
      <p><strong>Style:</strong> ${place.style.join(", ")}</p>
      <p><strong>Address:</strong> ${addressMarkup}</p>
      <p>${place.description}</p>
    `;

    return article;
  }

  // Replace the visible result cards whenever the selected style changes.
  function displayResults(places) {
    resultsContainer.innerHTML = "";

    if (places.length === 0) {
      resultsMessage.textContent = "No pizza places matched this style.";
      return;
    }

    resultsMessage.textContent = `${places.length} pizza place(s) found.`;

    places.forEach((place) => {
      resultsContainer.appendChild(createPizzaCard(place));
    });
  }

  // Match the selected dropdown value against each place's style list.
  function filterPizzaPlaces() {
    const selectedStyle = styleFilter.value;
    const filteredPlaces = pizzaPlaces.filter((place) => {
      return selectedStyle === "all" || place.style.includes(selectedStyle);
    });

    displayResults(filteredPlaces);
  }

  // Re-run the filter whenever the user picks a different style.
  styleFilter.addEventListener("change", filterPizzaPlaces);

  // Show every result and return the dropdown to its default option.
  showAllButton.addEventListener("click", () => {
    styleFilter.value = "all";
    displayResults(pizzaPlaces);
  });

  // Keep the page empty until the user filters or chooses to show everything.
  resultsMessage.textContent = "Choose a pizza style or click Show All.";
}
