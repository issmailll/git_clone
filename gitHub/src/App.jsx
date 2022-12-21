import Header from "./components/Header/Header";
import LedtSide from "./components/LeftSide/LedtSide";
import TopLinks from "./components/TopLinks/TopLinks";
import { Routes, Route } from "react-router-dom";
import FollowersPage from "./Pages/Followers/FollowersPage";
import FollowingPage from "./Pages/Following/FollowingPage";
import OverViewPage from "./Pages/OverView/OverViewPage";
import RepositoriesPage from "./Pages/Repositories/RepositoriesPage";
const App = () => {
  return (
    <>
      <Header />
      <TopLinks />
      <div className="d-flex container">
        <LedtSide />
        <Routes>
          <Route path="/followers" element={<FollowersPage />} />
          <Route path="/following" element={<FollowingPage />} />
          <Route path="/overView" element={<OverViewPage />} />
          <Route path="/repositories" element={<RepositoriesPage />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
