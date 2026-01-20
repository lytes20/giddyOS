import { useState } from "react";
import anonymous from "../../assets/images/anonymous.jpg";
import useAuthStore from "../../stores/login";

function Login() {
  const [password, setPassword] = useState("");
  const { login } = useAuthStore();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && password.trim()) {
      localStorage.setItem("isLoggedIn", "true");
      login();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-6">
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden border border-black">
          <img
            src={anonymous}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter Password"
          className="px-2 py-1 border border-black rounded-xl focus:outline-none focus:ring focus:ring-black focus:border-transparent text-center"
          autoFocus
        />
      </div>
    </div>
  );
}

export default Login;
