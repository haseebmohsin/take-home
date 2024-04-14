import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "./UI/PrimaryButton";
import InputField from "./UI/InputField";
import useLocalStorage from "../hooks/useLocalStorage";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [registeredUsers] = useLocalStorage("registeredUsers", []);

  const handleLogin = (event) => {
    event.preventDefault();

    const user = registeredUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // if everything goes well, Authenticate the user
      localStorage.setItem("AuthenticatedUser", JSON.stringify(user));
      navigate("/");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen align-middle w-full">
      <form className="w-[90%] sm:w-[40%] lg:w-[25%]" onSubmit={handleLogin}>
        <div className="mb-5">
          <InputField
            type="text"
            label="Username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-5">
          <InputField
            type="password"
            label="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <div className="text-red-500 mb-5">{error}</div>}

        <PrimaryButton fullWidth type="submit">
          Login
        </PrimaryButton>
      </form>
    </div>
  );
}

export default Login;
