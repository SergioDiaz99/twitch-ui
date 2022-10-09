import React from "react";

const LiveVideo = () => {
  return (
    <div id="hero" className="p-2 md:p-8">
        <div className=" relative overflow-hidden w-full pt-[56.25%]">
            <iframe
            className="absolute top-0 left-0 right-0 bottom-10 w-full h-full "
            src="https://www.youtube.com/embed/QH2jIc_v_PQ?autoplay=1&mute=1&loop=1"
            title="Sekiro Shadows Die Twice"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
        </div>

    </div>
  );
};

export default LiveVideo;
