import React, { Suspense } from "react";

import { Route, Routes } from "react-router-dom";
const Home = React.lazy(() => import("./page/Home.jsx"));
const VideoPlayer = React.lazy(() => import("./page/VideoPlayer"));
import Loader from "./components/Loader/index.jsx";

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center w-full min-h-screen">
          <Loader />
        </div>
      }
    >
      <div className="p-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video-player/:id" element={<VideoPlayer />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
