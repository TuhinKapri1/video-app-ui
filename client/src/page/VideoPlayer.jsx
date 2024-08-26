import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../constants/data";
import ReactPlayer from "react-player";
function VideoPlayer() {
  const { id } = useParams();
  const videoData = data?.find((ele) => ele.id === id);
  console.log(videoData);
  return (
    <div className=" flex ">
      <div className="w-[650px]">
        <ReactPlayer
          url={videoData?.videoUrl}
          controls={true}
          light={<img src={videoData?.thumbnailUrl} alt="Thumbnail" />}
          pip={true}
        />
        <div className="mt-2">
          <h2 className="text-[22px] font-semibold ">{videoData?.title}</h2>
          <div className="mt-4">
            <div className="flex gap-5">
              <img
                src={videoData?.thumbnailUrl}
                alt=""
                className="w-12 h-12 rounded-full "
              />
              <div className="flex gap-1 flex-col">
                <h3 className="text-[16px] font-semibold">
                  {videoData?.author}
                </h3>
                <p className="text-[14px] text-gray-600">
                  {videoData?.subscriber}
                </p>
              </div>
              <button className="px-5  border py-0 bg-gray-200 rounded-s-full rounded-e-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border mt-3 rounded-lg  ">
          <div className="p-2    ">
            <div className="flex items-center gap-3">
              <h1 className="text-[14px] font-semibold">
                {videoData?.views.slice(0, 2)}M views
              </h1>
              <p className="text-[12px] font-semibold ">
                {videoData?.uploadTime}
              </p>
            </div>
            <div>
              <p className="text-[14px]">
                {videoData?.description.slice(0, 110)} ...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="ms-6">
          <h1 className="text-[20px] mb-4 font-semibold">Related Videos</h1>
          <div>
            <div className="flex gap-3   flex-wrap">
              {data.map(
                (ele, index) =>
                  index < 5 && (
                    <Link
                      to={`/video-player/${ele.id}`}
                      key={ele.id}
                      className="flex gap-3"
                    >
                      <img
                        src={ele.thumbnailUrl}
                        alt=""
                        className="rounded-sm"
                        width={250}
                        height={100}
                      />
                      <div className="">
                        <h3 className="text-[16px] font-semibold">
                          {ele.title}
                        </h3>
                        <p className="text-[15px] mt-1 text-gray-500">
                          {ele?.author}
                        </p>
                        <div className="flex gap-3  items-end   text-gray-400 text-[13px] font-semibold ">
                          <p>{ele?.views.slice(0, 2)}M views</p>
                          <p className="text-[25px]">.</p>
                          <p>{ele?.uploadTime}</p>
                        </div>
                      </div>
                    </Link>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
