const urlParams = new URLSearchParams(window.location.search);
const eventId = parseInt(urlParams.get("id"));
const event = eventsData.find(e => e.id === eventId);

const details = document.getElementById("detailsContainer");
if (event) {
  details.innerHTML = `
    <h2>${event.name}</h2>
    <p><strong>Date:</strong> ${event.date}</p>
    <p><strong>Location:</strong> ${event.location}</p>
    <p><strong>Category:</strong> ${event.category}</p>
    <p>${event.description}</p>
    <a href="events.html" class="btn btn-secondary mt-3">← Back to Events</a>
  `;
} else {
  details.innerHTML = "<p>Event not found.</p>";
}