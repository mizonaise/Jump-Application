import { useContext } from "react";
import { ClientsList, LoginForm, Nav } from "../components";
import { AuthContext } from "../context/AuthContext";

function HomePage() {
  const authContext = useContext(AuthContext);

  return (
    <div className="container">
      <Nav />
      {authContext.auth.isAuth ? <ClientsList/> : <LoginForm />}
    </div>
  );
}

export default HomePage;