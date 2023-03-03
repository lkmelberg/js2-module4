// http request methods

// An example of a GET request would be fetching a list of articles from a server.
// The GET request mode is the default mode when doing a fetch.

// An example of a POST request would be where we send data to a server, and a new item gets created, such as a new user.

const requestOptions = {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
  .then((response) => response.json())
  .then((json) => console.log(json));
// Logs:
// {
//   id: 101,
//   title: 'foo',
//   body: 'bar',
//   userId: 1
// }

// An example of a PATCH request is if we had a user with information
//  and we wanted to update their information, such as updating their e - mail address. partial update not replace it completely

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  body: JSON.stringify({
    title: "foo",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// An example of a PUT request would be where we want to replace one product with another.

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify({
    id: 1,
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// An example of a DELETE request would be where we would delete an entire item, such as deleting an article or a user.

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
}).then((response) => {
  console.log(response);
});
// Logs:
// body: (...)
// bodyUsed: false
// headers: Headers {}
// ok: true
// redirected: false
// status: 200
// statusText: ""
// type: "cors"
// url: "https://jsonplaceholder.typicode.com/posts/1"

// If our response wasn’t successful, then we wouldn’t have a status of 200 and ok would be false. We can use these to our advantage.

// An example of using the HEAD request would be where you’d want to get meta-information about a server without needing response body.

// An example of the CONNECT request is when you want to access websites that use SSL.

// An example of the OPTIONS method is checking what methods a server would allow.

// An example of a TRACE method is where you would want to test the server is responding.

// Safe and non-safe methods

// Safe methods never modify resources or change the state of a server. An example of a safe method is GET, as it only obtains data.

// The POST method is a non-safe method as it may change the state of the server by creating a new entry/record.
// Idempotent methods

// Idempotent methods can be made once or several times in a row with the same effect while
//  leaving the server in the same state.Examples of these are GET, HEAD, PUT and DELETE.

// URL Prarmeters

// the firstName key with a value of ola.
// the lastName key with the value of nordmann.
//     separated by &

<a href="https://www.example.com/?firstName=ola&lastName=nordmann">Submit</a>;

// Get the container
const container = document.getElementById("container");

// These values are hardcoded here but they could come from another
// source such as an API
const firstName = "Ola";
const lastName = "Nordmann";

// Create a new <a> anchor link
const newLink = document.createElement("a");

// Here we use a template literal/template string to add our values
newLink.href = `https://www.example.com/?firstName=${firstName}&lastName=${lastName}`;

// We set the text content of our anchor link
newLink.textContent = "Submit";

// We add our anchor link to the parent container
container.appendChild(newLink);

// window.location.replace

// Get the button with id of "btn"
const button = document.getElementById("btn");

// These values are hardcoded here, but they could come from another
// source such as an API
// const firstName = "Ola";
// const lastName = "Nordmann";

// Add a "click" event listener that calls "onButtonClick"
button.addEventListener("click", onButtonClick);

// This function will fire each time the button is clicked
function onButtonClick() {
  // Replace the URL with our newly created URL that contains our
  // dynamic URL parameters
  window.location.replace(
    `https://www.example.com/?firstName=${firstName}&lastName=${lastName}`
  );
}

// Navigated to: http://localhost:8000/?firstName=ola&lastName=nordmann

// Get the parameter string from the URL
// const parameterString = window.location.search;
console.log(parameterString);

// Logs:
// ?firstName=ola&lastName=nordmann
//

// Navigated to: http://localhost:8000/?firstName=ola&lastName=nordmann

const parameterString = window.location.search;
const searchParameters = new URLSearchParams(parameterString);

// Iterate through the search parameters
for (const parameter of searchParameters) {
  console.log(parameter);
}
// Logs:
// (2) ['firstName', 'ola']
// (2) ['lastName', 'nordmann']

console.log(searchParameters.get("firstName"));
// Logs:
// ola

searchParameters.set("country", "Norway");

console.log(searchParameters.get("country"));
// Logs:
// Norway

console.log(searchParameters.toString());
// Logs:
// firstName=ola&lastName=nordman
