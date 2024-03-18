let apiKey = "cal_live_fbe615d9d9121c4d226b7f703835c90c";

document.getElementById("postButton").addEventListener("click", function () {
  console.log("Button clicked");
  fetch(`https://api.cal.com/v1/bookings?apiKey=${apiKey}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "start": "2024-04-24T10:00:00.000Z",
      "eventTypeId": "641549",
      "metadata": {},
      "responses": {
        "name": "John",
        "email": "johndoe@gmail.com",
      },
      "timeZone": "Europe/Zurich",
      "language": "en",
      "status": "ACCEPTED"
    })
  })
    .then((response) => {
      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
});

document.getElementById("getButton").addEventListener("click", function () {
  fetch(`https://api.cal.com/v1/bookings?apiKey=${apiKey}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
});

console.log("Hello World");
