// Asynchronous code

console.log("Console.log BEFORE timer");
// Creating a timer
setTimeout(() => {
  console.log("Code inside of timer");
}, 50);

console.log("hei ann helen");

// callbacks

// Example function that will get passed as a callback
function exampleFunction() {
  console.log("Example function called");
}

// Our main function that will run the callback function
// being passed to it
function doSomethingWithCallback(callbackFunction) {
  // Calling the function that is being passed
  callbackFunction();
}

// Pass "exampleFunction" function into our main
// "doSomethingWithCallback" function
doSomethingWithCallback(exampleFunction);

const values = [5, 10, 15, 20];

function isBiggerThan10(value) {
  if (value > 10) {
    return true;
  }
}

const newValues = values.filter(isBiggerThan10);
console.log(newValues);
// Logs:
// [15, 20]

// function showArticles() {
//   doAPICall(function (data)) {
//     filterArticles(function (data)) {
//       sortArticles(function (data)) {
//         data.map(function (item) {
//           displayArticle(function(item) {
//             // Display the article
//           })
//         })
//       }
//     }
//   }
// }

// promise

const myPromise = new Promise((resolve, reject) => {
  // We are hardcoding a value for this example
  const shouldResolve = true;
  if (shouldResolve) {
    // If the code inside of the promise was able to do what
    // it needed to do, then it will call this 'resolve' callback
    resolve("Promise resolved successfully.");
  } else {
    // If the code inside of the promise failed to do what
    // it needed to do then it will call this 'reject' callback
    reject("Promise has failed");
  }
});

myPromise.then((result) => {
  // Logs either the 'resolve' or 'reject' returns based on
  // whether the promise succeeded or failed
  console.log(result);
});

// .then()

// We fetch the data from the URL
fetch("https://jsonplaceholder.typicode.com/todos/1")
  // We have to asynchronously parse the data into JSON
  //   so we can make use of it
  .then((response) => response.json())
  // Data is now available as
  .then((json) => console.log(json));

// .catch()

// fetch("abc")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   // An error is going to be thrown causing the code below
//   // to run
//   .catch((error) => {
//     console.log("An error has been thrown");
//     console.log(error);
//   });

// .finally()

//   let isLoading = true;
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
//   .catch((error) => console.log(error))
//   .finally(
//     isLoading = false;
//   )

// async / await

// Fetches data from the URL passed in
async function doFetch(url) {
  const data = await fetch(url);
  const json = await data.json();
  return json;
}

// Our main function that will call the data
// using await. If we don't use await then we will
// instead get a promise
async function main() {
  const articles = await doFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  console.log(articles);
  // Returns:
  // {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
}

// Execute our code
main();

// try / catch
// async function yesFetch(url) {
//   try {
//     const data = await yesFetch(url);
//     const json = await data.json();
//     return json;
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("API call is done");
//   }
// }

// promise.all()

const promise1 = Promise.resolve("Promise 1 result");
const promise2 = Promise.resolve("Promise 2 result");
const promise3 = Promise.resolve("Promise 3 result");

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Logs:
// ["Promise 1 result", "Promise 2 result", "Promise 3 result"];

async function yesFetch(url) {
  try {
    const data = await fetch(url);
    const json = await data.json();
    return json;
  } catch (error) {
    console.log("big error");
  } finally {
    console.log("API call is done big call");
  }
}

async function main1() {
  const data = await Promise.all([
    yesFetch("https://jsonplaceholder.typicode.com/todos/1"),
    yesFetch("https://jsonplaceholder.typicode.com/todos/2"),
    yesFetch("https://jsonplaceholder.typicode.com/todos/3"),
  ]);
}

main1();

// fetch()

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
// Logs:
// {
// 	"userId": 1,
// 	"id": 1,
// 	"title": "delectus aut autem",
// 	"completed": false
// }

// fetch(url, options) - options

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
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

// options object

// An object that contains our options
const fetchOptions = {
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

// Using the `fetchOptions` object we created aboves
fetch("https://jsonplaceholder.typicode.com/posts", fetchOptions)
  .then((response) => response.json())
  .then((json) => console.log(json));
