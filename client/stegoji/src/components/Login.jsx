// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     height: "100vh",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     marginBottom: theme.spacing(2),
//   },
//   textField: {
//     marginBottom: theme.spacing(2),
//   },
//   button: {
//     marginBottom: theme.spacing(1),
//   },
// }));

// const Login = () => {
//   const classes = useStyles();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setErrorMessage("");

//     const user = { username, password };

//     try {
//       const response = await fetch("http://localhost:8080/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(user),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log(data.message); // Handle successful login
//       } else {
//         throw new Error("Login failed");
//       }
//     } catch (error) {
//       setErrorMessage("Invalid username or password");
//     }
//   };

//   return (
//     <div className={classes.container}>
//       <form className={classes.form} onSubmit={handleLogin}>
//         <TextField
//           className={classes.textField}
//           label="Username"
//           variant="outlined"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <TextField
//           className={classes.textField}
//           label="Password"
//           variant="outlined"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <Button
//           className={classes.button}
//           variant="contained"
//           color="primary"
//           type="submit"
//         >
//           Login
//         </Button>
//       </form>
//       {errorMessage && (
//         <Typography color="error" variant="body1">
//           {errorMessage}
//         </Typography>
//       )}
//     </div>
//   );
// };

// export default Login;