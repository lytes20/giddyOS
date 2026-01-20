import AppShell from "./components/layout/AppShell";
import AuthGate from "./components/layout/AuthGate";

function App() {
  return (
    <AuthGate>
      <AppShell />
    </AuthGate>
  );
}

export default App;
