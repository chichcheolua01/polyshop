import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseClient from "./pages/client/BaseClient";
import HomePage from "./pages/client/Home/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseClient />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
