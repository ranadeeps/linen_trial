import { Routes, Route, BrowserRouter } from "react-router";
import { Home } from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
