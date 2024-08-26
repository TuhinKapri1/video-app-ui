import React from "react";
import { data } from "../constants/data";
import VideoCart from "../components/VideoCart";
function Home() {
  console.log(data);
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold mb-4">See All videos</h1>
        <div className="flex flex-col gap-3">
          {data?.map((ele, index) => (
            <VideoCart key={index} data={ele} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
