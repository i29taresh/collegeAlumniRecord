import Create from "./components/Create";
import ListAlumni from "./components/ListAlumni";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/alumni-list" element={<><Create/> <ListAlumni /></>}/>
      </Routes>
    </BrowserRouter>
      {/* <RegisterPage /> */}
    </>
  );
}

export default App;
