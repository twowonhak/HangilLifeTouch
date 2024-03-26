import {BrowserRouter, Route, Routes} from "react-router-dom";
import {BirthDate, ChartNumber, Identification, Main, Memu, Reservation, Test} from "./pages";
import {useCookies} from "react-cookie";
import {Header} from "./components";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies();

  return (
      <BrowserRouter>
        <Header cookies={cookies} removeCookie={removeCookie}/>

        <Routes>
          <Route path="/" element={<Main/>}></Route>

          <Route path="/test" element={<Test/>}></Route>

          <Route path="/identification" element={<Identification/>}></Route>
          <Route path="/identification/birthDate" element={<BirthDate/>}></Route>
          <Route path="/identification/chartNumber" element={<ChartNumber/>}></Route>

          <Route path="/memu" element={<Memu/>}></Route>

          <Route path="/memu/reservation" element={<Reservation/>}></Route>

        </Routes>
      </BrowserRouter>
  );
}

export default App;

