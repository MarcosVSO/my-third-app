import { Routes, Route } from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetUps";
import NewMeetUpPage from "./pages/NewMeetUp";
import FavoritesMeetUpsPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetUpsPage />}></Route>
        <Route path="/favorites" element={<FavoritesMeetUpsPage />}></Route>
        <Route path="/new" element={<NewMeetUpPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
