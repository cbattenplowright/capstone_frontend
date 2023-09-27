import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RouteContainer from "./containers/RouteContainer";
import OrderContainer from "./containers/OrderContainer";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<RouteContainer />} />
          <Route path="/orders" element={<OrderContainer />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
