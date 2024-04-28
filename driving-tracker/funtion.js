document.getElementById("drivingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the number of existing entries
    var entryCount = document.querySelectorAll(".entry").length;

    // If the number of entries is less than 30, add the new entry
    if (entryCount < 30) {
        var formData = new FormData(this);
        var date = formData.get("date");
        var shortDetails = formData.get("shortDetails");

        // Create a new entry element
        var entry = document.createElement("div");
        entry.classList.add("entry");
        entry.innerHTML = "<strong>" + (entryCount + 1) + ". Date:</strong> " + date + "<br><strong>Details:</strong> " + shortDetails;

        // Append the entry to the container
        document.getElementById("entryContainer").appendChild(entry);
    } else {
        alert("You have reached the limit of 30 entries.");
    }
});
