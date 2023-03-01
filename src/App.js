import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "./App.css";
import TimeLine from "./timeline/TimeLine";

function App() {
  return (
      <Routes>
        <Route path="/timeline" element={<TimeLine />} />
      </Routes>
  );
}

export default App;

