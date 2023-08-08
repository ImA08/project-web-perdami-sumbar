// Initialize variables to store selected event and search name
let selectedEvent = "";
let searchName = "";

function setSelectedEvent(event) {
  selectedEvent = event;
}

function setSearchName(name) {
  searchName = name;
}

function handleSearch() {
  // Make an AJAX request to fetch certificate data based on selectedEvent and searchName
  // You can use the Fetch API or XMLHttpRequest for this

  // Example using Fetch API
  fetch(`fetch_certificates.php?event=${selectedEvent}&name=${searchName}`)
    .then((response) => response.json())
    .then((data) => {
      // Call a function to display the data in a table or show "Data not found" message
      displayResults(data);
    })
    .catch((error) => console.error("Error:", error));
}

function displayResults(data) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (data.length === 0) {
    resultsDiv.textContent = "Data not found.";
  } else {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const headerRow = document.createElement("tr");
    const headers = ["Name", "Event", "Download"];

    headers.forEach((headerText) => {
      const headerCell = document.createElement("th");
      headerCell.textContent = headerText;
      headerRow.appendChild(headerCell);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    data.forEach((cert) => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = cert.name;
      row.appendChild(nameCell);

      const eventCell = document.createElement("td");
      eventCell.textContent = cert.event;
      row.appendChild(eventCell);

      const downloadCell = document.createElement("td");
      const downloadLink = document.createElement("a");
      downloadLink.href = cert.downloadLink; // Provide the actual download link
      downloadLink.textContent = "Download";
      downloadCell.appendChild(downloadLink);
      row.appendChild(downloadCell);

      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    resultsDiv.appendChild(table);
  }
}
