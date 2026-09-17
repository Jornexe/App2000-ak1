const form = document.getElementById("trip-form");
const departure = document.getElementById("departure");
const returnDate = document.getElementById("return-date");
const message = document.getElementById("message");
const tripList = document.getElementById("trip-list");

const today = new Date().toISOString().split("T")[0];
departure.min = today;
returnDate.min = today;

departure.addEventListener("change", () => {
    returnDate.min = departure.value || today;
    validateDates();
});

returnDate.addEventListener("change", validateDates);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity() || !validateDates()) {
        return;
    }

    const data = new FormData(form);
    const trip = {
        name: data.get("tripName"),
        destination: data.get("destination"),
        departure: data.get("departure"),
        returnDate: data.get("returnDate"),
        participants: data.get("participants")
    };

    const listItem = document.createElement("li");
    listItem.textContent = `${trip.name} - ${trip.destination}, ${trip.departure} til ${trip.returnDate} (${trip.participants} deltaker(e))`;
    tripList.appendChild(listItem);

    form.reset();
    returnDate.min = today;
    message.textContent = "Turen er registrert.";
});

function validateDates() {
    if (!departure.value || !returnDate.value) {
        return true;
    }

    const valid = returnDate.value >= departure.value;
    returnDate.setCustomValidity(valid ? "" : "Returdato må være samme dag eller etter avreise.");
    return valid;
}
