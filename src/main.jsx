import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import BackgroundMusic from "./components/Music";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <BackgroundMusic src="https://portfolio-assets-storage.s3.ap-south-1.amazonaws.com/public/song.mp3" />
      <App />
    </BrowserRouter>
  </StrictMode>
);
