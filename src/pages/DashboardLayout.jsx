import { Outlet } from "react-router-dom";

import Wrapper from "../assets/wrappers/Dashboard";
import BigSidebar from "../components/BigSidebar";
import Navbar from "../components/Navbar";
import SmallSidebar from "../components/smallSidebar";


const Dashboard = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default Dashboard;
