const container = document.getElementById("eventList");
const search = localStorage.getItem("search")?.toLowerCase();
const date = localStorage.getItem("date");
const category = localStorage.getItem("category");

const filtered = eventsData.filter(event => {
  return (!search || event.name.toLowerCase().includes(search) || event.location.toLowerCase().includes(search)) &&
         (!date || event.date === date) &&
         (!category || event.category === category);
});

filtered.forEach(event => {
  const col = document.createElement("div");
  col.className = "col-md-4";
  col.innerHTML = `
    <div class="card h-100 shadow">
      <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${event.date}</h6>
        <p class="card-text">${event.description}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <a href="event-details.html?id=${event.id}" class="btn btn-outline-primary">View Details</a>
      </div>
    </div>
  `;
  container.appendChild(col);
});