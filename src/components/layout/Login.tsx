import { useState } from "react";
import anonymous from "../../assets/images/anonymous.jpg";
import useLogin from "../../stores/login";

function Login() {
  const [password, setPassword] = useState("");
  const { login } = useLogin();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && password.trim()) {
      login();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-6">
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-gray-300">
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
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-center"
          autoFocus
        />
      </div>
    </div>
  );
}

export default Login;
