import { ReactNode } from "react";
import useAuthStore from "../../stores/login";
import Login from "./Login";

interface AuthGateProps {
  children: ReactNode;
}

function AuthGate(props: AuthGateProps) {
  const { children } = props;
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  if (!isLoggedIn) {
    return <Login />;
  }
  return children;
}

export default AuthGate;
