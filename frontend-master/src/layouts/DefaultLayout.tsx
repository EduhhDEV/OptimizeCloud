import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CleanView } from "../components/CleanView";

export function DefaultLayout() {
  return (
    <>
      <Navbar />
      <CleanView>
        <Outlet />
      </CleanView>
      <Footer />
    </>
  );
}
