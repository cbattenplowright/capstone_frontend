import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RouteContainer from "./containers/RouteContainer";
import OrderContainer from "./containers/OrderContainer";
import OrderContextProvider from "./components/contexts/OrderContext";

function App() {
  return (
    <OrderContextProvider>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/routes" element={<RouteContainer />} />
            <Route path="/" element={<OrderContainer />} />
          </Routes>
        </main>
      </BrowserRouter>
    </OrderContextProvider>
  );
}

export default App;
