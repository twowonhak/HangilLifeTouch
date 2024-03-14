import {BrowserRouter, Route, Routes} from "react-router-dom";
import {BirthDate, ChartNumber, Identification, Main, Memu} from "./pages";
import {Header} from "./components";

function App() {

  return (
      <BrowserRouter>
        {/*<Header />*/}
        <Routes>
          <Route path="/" element={<Main/>}></Route>

          <Route path="/identification" element={<Identification/>}></Route>
          <Route path="/identification/birthDate" element={<BirthDate/>}></Route>
          <Route path="/identification/chartNumber" element={<ChartNumber/>}></Route>

          <Route path="/memu" element={<Memu/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

