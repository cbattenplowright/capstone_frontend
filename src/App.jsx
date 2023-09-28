import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RouteContainer from "./containers/RouteContainer";
import OrderContainer from "./containers/OrderContainer";
import MapContextProvider from "./components/contexts/MapContext";
import OrderContextProvider from "./components/contexts/OrderContext";

function App() {
  return (
    <OrderContextProvider>
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
    </OrderContextProvider>

  );
}

export default App;
