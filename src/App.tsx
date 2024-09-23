import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { UserProvider } from 'mediastore/UserContext';
import Layout from './views/Layout';
import { MediaProvider } from 'mediastore/MediaContext';
import ProtectedRoute from './components/ProtectedRoute';
import Upload from './views/upload/Upload';


function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <UserProvider>
        <MediaProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route
                path="/upload"
                element={
                  <ProtectedRoute>
                    <Upload />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </MediaProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
