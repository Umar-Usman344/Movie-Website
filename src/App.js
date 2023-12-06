import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleMovie from "./SingleMovie";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="movie/:id" element={<SingleMovie/>}/>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
