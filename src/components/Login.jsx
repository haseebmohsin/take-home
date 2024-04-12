import InputField from "./UI/InputField";
import PrimaryButton from "./UI/PrimaryButton";

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen align-middle w-full">
      <form className="w-[90%] sm:w-[40%] lg:w-[25%]">
        <div className="mb-5">
          <InputField
            type="text"
            label="Username"
            id="username"
            placeholder="Khan"
            required
          />
        </div>

        <div className="mb-5">
          <InputField
            type="password"
            label="Password"
            id="password"
            placeholder="*****"
            required
          />
        </div>

        <PrimaryButton fullWidth>Login</PrimaryButton>
      </form>
    </div>
  );
}

export default Login;
