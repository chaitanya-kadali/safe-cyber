import "./styles/Main.css";
import Header from "./Header";
import Hero from "./Hero comps/Hero";
import { useLocation } from "react-router-dom";
function Main() {
  const location = useLocation();  // Get the current location
  const params = new URLSearchParams(location.search);  // Use location.search instead of window.location.search
  const email = params.get("email");
  console.log(email);
  return (
    <>
      <Header email={email}/>
      <Hero email={email}/>
    </>
  );
}
export default Main;
