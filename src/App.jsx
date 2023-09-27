import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RouteContainer from "./containers/RouteContainer";
import OrderContainer from "./containers/OrderContainer";
import MapContextProvider from "./components/contexts/MapContext";

function App() {
  return (
    <MapContextProvider>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<RouteContainer />} />
            <Route path="/orders" element={<OrderContainer />} />
          </Routes>
        </main>
      </BrowserRouter>
    </MapContextProvider>
  );
}

export default App;
