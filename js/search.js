/*
A script that powers the pizza search interface by filtering the pizza-data.js array according to the selected style.
It then renders matching locations as result cards, then resets the interface to display all styles when clicking the "Show All" button.
It also generates Google Maps links for each location and updates the results message dynamically based on the current filter state.
*/


// References the style dropdown used to filter pizza places.
const styleFilter = document.getElementById("style-filter");

// References the button that resets the filter to show all pizza styles.
const showAllButton = document.getElementById("show-all-button");

// References the container where the filtered pizza cards will be displayed.
const resultsContainer = document.getElementById("results-container");

// References the message area that shows search instructions or result counts.
const resultsMessage = document.getElementById("results-message");


// Only wire up the search logic when the page includes the expected controls.
if (styleFilter && showAllButton && resultsContainer && resultsMessage) {

  // Builds a Google Maps search link using the business name and address.
  function getGoogleMapsUrl(place) {

    // Combines the place name and address into one search query for Google Maps.
    const searchQuery = `${place.name} ${place.address}`.trim();
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchQuery)}`;
  }

  // Creates one result card for a pizza place.
  function createPizzaCard(place) {

    // Creates the article element that will hold one pizza place result.
    const article = document.createElement("article");

    // Stores the neighbourhood text or a fallback message if it is missing.
    const neighbourhoodMarkup = place.neighbourhood || "Not available";

    // Stores the address text or a fallback message if it is missing.
    const addressMarkup = place.address || "Not available";

    // Creates a clickable name linked to Google Maps when an address is available.
    const nameMarkup = place.address
      ? `<a class="name-link" href="${getGoogleMapsUrl(place)}" target="_blank" rel="noopener noreferrer">${place.name}</a>`
      : place.name;

    // Creates the markup to render the results card
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

  // Replaces the visible result cards whenever the selected style changes.
  function displayResults(places) {

    // Clears the current results before showing the updated list.
    resultsContainer.innerHTML = "";

    /* Shows a message if no pizza places match the selected style.
       Note: with the current set-up this technically never displays but it is here 
       in case I chose to expand upon this section of the site in the future. */
    if (places.length === 0) {
      resultsMessage.textContent = "No pizza places matched this style.";
      return;
    }

    // Updates the message to show how many pizza places were found.
    resultsMessage.textContent = `${places.length} pizza place(s) found.`;

    // Loops through each matching place and adds its card to the page.
    places.forEach((place) => {
      resultsContainer.appendChild(createPizzaCard(place));
    });
  }

  // Matches the selected dropdown value against each place's style list.
  function filterPizzaPlaces() {

    // Stores the pizza style currently selected in the dropdown.
    const selectedStyle = styleFilter.value;

    // Creates a new array containing only the places that match the selected style.
    const filteredPlaces = pizzaPlaces.filter((place) => {
      return selectedStyle === "all" || place.style.includes(selectedStyle);
    });

    displayResults(filteredPlaces);
  }

  // Re-runs the filter whenever the user picks a different style.
  styleFilter.addEventListener("change", filterPizzaPlaces);

  // Shows every result and returns the dropdown to its default "All Styles" option.
  showAllButton.addEventListener("click", () => {
    styleFilter.value = "all";
    displayResults(pizzaPlaces);
  });

  // Displays default text before the user selects from the drop menu.
  resultsMessage.textContent = "Choose a pizza style or click Show All.";
}
