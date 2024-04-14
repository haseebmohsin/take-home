import { useNavigate } from "react-router-dom";
import PrimaryButton from "./UI/PrimaryButton";

function Header() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate("/signUp");
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("AuthenticatedUser");
    localStorage.removeItem("showNewYorkTimes");
    localStorage.removeItem("showGuardian");
    localStorage.removeItem("showNewsApi");
    navigate("/");
  };

  // Check if the user is authenticated
  const isAuthenticated = localStorage.getItem("AuthenticatedUser");

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 fixed inset-x-0">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Take Home
          </span>

          <div className="flex gap-3 items-center lg:order-2">
            {isAuthenticated ? (
              <PrimaryButton secondary onClick={handleLogoutClick}>
                Logout
              </PrimaryButton>
            ) : (
              <>
                <PrimaryButton secondary onClick={handleLoginClick}>
                  Login
                </PrimaryButton>

                <PrimaryButton onClick={handleSignUpClick}>
                  Sign Up
                </PrimaryButton>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
