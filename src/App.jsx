import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TrainersPage from "./pages/TrainersPage";
import EventsPage from "./pages/EventsPage";
import AboutUsPage from "./pages/AboutUsPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/aboutus" element={<AboutUsPage />}></Route>
        <Route path="/trainers" element={<TrainersPage />}></Route>
        <Route path="/events" element={<EventsPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
