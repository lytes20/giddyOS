import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Login from "./components/layout/Login";
import Main from "./components/layout/Main";
import useLogin from "./stores/login";

function App() {
  const isLoggedIn = useLogin((state) => state.isLoggedIn);
  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
