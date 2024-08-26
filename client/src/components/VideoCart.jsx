import React from "react";
import { Link } from "react-router-dom";

function VideoCart({ data }) {
  return (
    <Link to={`/video-player/${data.id}`} className="flex gap-4">
      <div>
        <img src={data?.thumbnailUrl} alt="" className="rounded-md" width={300} height={200} />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[17px]  font-semibold ">
          {data?.title} - - {data?.subscriber}{" "}
        </p>
        <p>{data?.description.slice(0,100)}...</p>
        <p>Duration - {data?.duration}</p>
        <p>{data?.author}</p>
        <p></p>
      </div>
    </Link>
  );
}

export default VideoCart;
