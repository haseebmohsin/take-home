import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "./UI/PrimaryButton";
import InputField from "./UI/InputField";
import useLocalStorage from "../hooks/useLocalStorage";

function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");
  const [registeredUsers, setRegisteredUsers] = useLocalStorage(
    "registeredUsers",
    []
  );

  const handleSignUp = (event) => {
    event.preventDefault();
    if (password !== rePassword) {
      setError("Passwords do not match");
      return;
    }

    // Check if username already exists
    if (registeredUsers.find((user) => user.username === username)) {
      setError("Username already exists");
      return;
    }

    // If username doesn't exist, add the user to registeredUsers array in the local storage
    const newUser = { username, password };
    const updatedUsers = [...registeredUsers, newUser];

    setRegisteredUsers(updatedUsers);

    // Set the authenticated user in localStorage
    localStorage.setItem("AuthenticatedUser", JSON.stringify(newUser));

    // Clear input fields and error message
    setUsername("");
    setPassword("");
    setRePassword("");
    setError("");

    // if everything goes well, Authenticate the user
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen align-middle w-full">
      <form className="w-[90%] sm:w-[40%] lg:w-[25%]" onSubmit={handleSignUp}>
        <div className="mb-5">
          <InputField
            type="text"
            label="Username"
            id="username"
            placeholder="Khan"
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
            placeholder="*****"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-5">
          <InputField
            type="password"
            label="Re-Type Password"
            id="re-password"
            placeholder="*****"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            required
          />
        </div>

        {error && <div className="text-red-500 mb-5">{error}</div>}

        <PrimaryButton fullWidth type="submit">
          Sign Up
        </PrimaryButton>
      </form>
    </div>
  );
}

export default SignUp;
