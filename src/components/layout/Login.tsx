import { useState } from "react";
import anonymous from "../../assets/images/anonymous.jpg";
import useAuthStore from "../../stores/login";

function Login() {
  const [password, setPassword] = useState("");
  const [showHint, setShowHint] = useState(false);
  const { login } = useAuthStore();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && password.trim()) {
      login();
    }
  };

  const handleHintClick = () => {
    setShowHint(!showHint);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <div className="flex flex-col items-center justify-center flex-1">
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
      <div className="flex justify-center pb-6">
        {showHint ? (
          <p className="text-sm text-gray-600 text-center max-w-xs">
            You can just type any password, hit enter and get logged in.
          </p>
        ) : (
          <button
            onClick={handleHintClick}
            title="Password hint"
            className="w-8 h-8 rounded-full border border-black bg-white hover:bg-gray-100 flex items-center justify-center text-sm font-medium focus:outline-none focus:ring focus:ring-black focus:border-transparent"
          >
            ?
          </button>
        )}
      </div>
    </div>
  );
}

export default Login;
