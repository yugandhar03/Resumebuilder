import { ResumeProvider } from './Context';
import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ResumePreviewPicker from './components/ResumePreviewPicker';
import Auth from "./components/Auth/Auth"

function App() {
  return (

    <>
      <ResumeProvider >

        <Router>
          <Routes>
            <Route exact path="/login" element={<Auth />} />
            <Route exact path="/" element={<Main />} />
            <Route path="/temp" element={<ResumePreviewPicker />} />
          </Routes>
        </Router>
      </ResumeProvider>


    </>

  );
}

export default App;
