import { useState } from "react";
import styles from "./Login.module.css";

function Login() {
  const init = { username: "", password: "" };  
  const [loginCredentials, setLoginCredentials] = useState(init);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const onChange = (evt) => {
    setLoginCredentials({ ...loginCredentials, [evt.target.id]: evt.target.value });  
  };

  async function handleLogin(e) {
    e.preventDefault();
    const hardcodedUser = "lumiere";
    const hardcodedPass = "1234";

    if(
        loginCredentials.username  === hardcodedUser &&
        loginCredentials.password === hardcodedPass
    ){
        setSuccess(true);
        setError("");
        console.log("Logged in successfully");
    } else {
        setError("Wrong username or password");
      setSuccess(false);
    }
  }

  return (
  <div className={styles.loginContainer}>
    {!success ? (
      // LOGIN FORM
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <input
          id="username"
          type="text"
          value={loginCredentials.username}
          onChange={onChange}
          placeholder="Username"
        />
        <input
          id="password"
          type="password"
          value={loginCredentials.password}
          onChange={onChange}
          placeholder="Password"
        />
        <button type="submit">Login</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    ) : (
      // LOGGED IN VIEW
      <div className={styles.loggedIn}>
        <p>Welcome {loginCredentials.username}!</p>
        <button onClick={() => {
          setSuccess(false);       // log out
          setLoginCredentials(init); // clear fields
        }}>
          Logout
        </button>
      </div>
    )}
  </div>
);

}

export default Login;