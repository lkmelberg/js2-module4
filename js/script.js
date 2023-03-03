const API_BASE_URL = "https://nf-api.onrender.com";

async function registerUser(url, userData) {
  //   console.log(url, userData);
  try {
    //
  } catch (error) {
    console.log(error);
  }
}

const userToRegister = {
  name: "testTest",
  email: "testTest@stud.noroff.no",
  password: "oneTwoThree",
};
// /api/v1/social/auth/register
// const tempObject = {
//   name: "testTest", // Required
//   email: "testTest@stud.noroff.no", // Required
//   password: "oneTwoThree", // Required
//   "avatar": "https://img.service.com/avatar.jpg", // Optional
//   "banner": "https://img.service.com/banner.jpg"  // Optional
// };

const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;

registerUser(registerUrl, userToRegister);

// async function registerUser(url, data) {
//   try {
//     const postData = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     };

//     const response = await fetch(url, postData);
//     console.log(response);
//     const json = await response.json();
//     console.log(json);
//     return json;
//   } catch (error) {
//     console.log(error);
//   }
// }

// const user = {
//   name: "test_account_a",
//   email: "test-account-a@noroff.no",
//   password: "my-password",
// };

// registerUser(`${API_BASE_URL}/api/v1/social/auth/register`, user);
