import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "./App.css";
import TimeLine from "./timeline/TimeLine";
import SignInModal from "./components/menu/SignIn/SignInModal";

function App() {
  return (
    <Routes>
      <Route path="/:postId" element={<TimeLine />}>
        <Route path="/:postId/sign-in" element={<SignInModal />} />
      </Route>
    </Routes>
  );
}

export default App;
