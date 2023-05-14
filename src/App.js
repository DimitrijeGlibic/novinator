import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "./App.css";
import TimeLine from "./timeline/TimeLine";
import SignInModal from "./components/menu/SignIn/SignInModal";
import MenuSideDrawer from "./components/menu/MenuSideDrawer";
import { useState } from "react";
import CreatePost from "./write/CreatePost";
import { themes } from "./write/themes";
import Profile from "./profile/Profile";
import LogInModal from "./profile/LogInModal";
import RegisterModal from "./profile/RegisterModal";
import { UserContext } from "./context/UserContext";
import { RegisterModalContext } from "./context/RegisterModalContext";
import { LoginModalContext } from "./context/LoginModalContext";

function App() {
  const user = {
    name: "Dimitrije",
    isLoggedIn: false,
    logginModalVisible: false
  };
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <UserContext.Provider value={user}>
      <RegisterModalContext.Provider value={setIsRegisterModalOpen}>
        <LoginModalContext.Provider value={setIsLoginModalOpen}>
          <MenuSideDrawer />
          <Routes>
            <Route path="/login" element={<LogInModal isVisible />} />
            <Route path="/register" element={<RegisterModal isVisible />} />
            <Route path="/:postId" element={<TimeLine />}>
              <Route path="/:postId/sign-in" element={<SignInModal />} />
            </Route>
            <Route path="/create-post" element={<CreatePost themes={themes} />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <RegisterModal isVisible={isRegisterModalOpen} />
          <LogInModal isVisible={isLoginModalOpen} />
        </LoginModalContext.Provider>
      </RegisterModalContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
