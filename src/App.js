import Feed from "./feed/Feed";
import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "./App.css";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Feed />} />
      </Routes>
  );
}

export default App;

