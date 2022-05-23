// // router.post("/sign-up", CreateNewUser);
// // router.post("/verify-user", verifyCredentials);
// // router.post("/login-user", fetchID, getUser);

// const CreateUser = async ({ name, email, password }) => {
//   try {
//     let data = {
//       name,
//       email,
//       password,
//     };

//     let dataJSON = JSON.stringify(data);

//     let response = await fetch("https://rohan-b-84-todo.herokuapp.com/api/auth/sign-up", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: dataJSON,
//     });
//     let resJSON = await response.json();
//     localStorage.setItem("token", resJSON.token);
//   } catch (error) {
//     console.log(error);
//   }
// };
// const VerifyUser = async ({ email, password }) => {
//   try {
//     let data = {
//       email,
//       password,
//     };

//     let dataJSON = JSON.stringify(data);

//     let response = await fetch("https://rohan-b-84-todo.herokuapp.com/api/auth/verify-user", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: dataJSON,
//     });
//     let resJSON = await response.json();
//     localStorage.setItem("token", resJSON.token);
//   } catch (error) {
//     console.log(error);
//   }
// };
// const LoginUser = () => {};

// module.exports = { CreateUser };
