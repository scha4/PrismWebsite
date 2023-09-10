import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TrainersPage from "./pages/TrainersPage";
import EventsPage from "./pages/EventsPage";
import AboutUsPage from "./pages/AboutUsPage";
import SignUpPage from "./pages/SignUpPage";
import ContactUsPage from "./pages/ContactUsPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/aboutus" element={<AboutUsPage />}></Route>
        <Route path="/trainers" element={<TrainersPage />}></Route>
        <Route path="/events" element={<EventsPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/contactus" element={<ContactUsPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
