import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css' // tailwind
import Home from "./components/Home";
import Login from "./components/Login"

function App() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <BrowserRouter>



        <Routes>
          <Route index element={<Home />} />
          <Route path="login"element={<Login/>}/>

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p className="text-white text-2xl">Page under Construction!</p>
              </main>
            }
          />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
