const parameterString = window.location.search;
const searchParameters = new URLSearchParams(parameterString);

// // Iterate through the search parameters
// for (const parameter of searchParameters) {
//   console.log(parameter);
// }
// Logs:
// (2) ['firstName', 'ola']
// (2) ['lastName', 'nordmann']

console.log(searchParameters.get("firstName"));
console.log(searchParameters.get("lastName"));
