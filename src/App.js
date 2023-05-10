import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import './App.css';
import PageLayout from './components/PageLayout';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Post from "./components/pages/Post";
import Admin from "./components/pages/Admin";
//import NoPage from "./components/pages/NoPage";
function App() {
  return (
    <div className="App">
      {
          <HashRouter>
            <Routes>
              <Route exact path="/" element={<PageLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="post" element={<Post />} />
                <Route path="admin" element={<Admin />} />
                {/* <Route path="*" element={<NoPage />} /> */}
              </Route>
            </Routes>
          </HashRouter>
      }
    </div>
  );
}

export default App;
