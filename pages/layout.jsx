// Layout.js
import NavBar from "../pages/NavBar";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
