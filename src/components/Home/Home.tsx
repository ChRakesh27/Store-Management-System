import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Auth from "../Auth/Auth";
import Content from "../Content/Content";
import Customers from "../Customers/Customers";
import OrderCustomerDetailViews from "../Customers/OrderCustomerDetailViews";
import CreaterViewPages from "../Dashboard/CreaterViewPages";
import CreatorBackendAdmin from "../Dashboard/CreatorBackendAdmin";
import Dashboard from "../Dashboard/Dashboard";
import Test from "../Dashboard/test";
import Profile from "../Profile/Profile";
import SettingsPage from "../Settings/SettingsPage";
import Sidebar from "../ui/Sidebar";
import Wall from "../Wall/Wall";
import Test2 from "./Test2";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname == "/") {
      navigate("/wall");
    }
  }, []);

  return (
    <div className="w-full">
      <Sidebar />
      <main className="w-full overflow-y-auto h-screen ">
        <Routes>
          <Route
            path="/OrderCustomerDetailViews"
            element={<OrderCustomerDetailViews />}
          />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="/test" element={<Test />} />
          <Route path="/abc" element={<CreaterViewPages />} />
          <Route path="/xyz" element={<CreatorBackendAdmin />} />
          <Route path="/wall" element={<Wall />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/create" element={<Dashboard />} />
          <Route path="/content" element={<Content />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default Home;
