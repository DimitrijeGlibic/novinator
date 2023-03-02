import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "./App.css";
import TimeLine from "./timeline/TimeLine";
import SignInModal from "./components/menu/SignIn/SignInModal";
import Write from "./write/Write";
import MenuSideDrawer from "./components/menu/MenuSideDrawer";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <MenuSideDrawer />
      <Routes>
        <Route path="/:postId" element={<TimeLine />}>
          <Route path="/:postId/sign-in" element={<SignInModal />} />
        </Route>
        <Route path="/write" element={<Write />} />
      </Routes>
    </Fragment>
  );
}

export default App;
