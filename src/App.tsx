import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { UserProvider } from "mediastore/UserContext";
import { MediaProvider } from "mediastore/MediaContext";
import Upload from "./components/Upload";

function App() {
  return (
    <Router>
      <UserProvider>
        <MediaProvider>
          <Routes>
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </MediaProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
