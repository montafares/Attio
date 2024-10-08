import React from "react";

function ScreenViedos() {
  return (
    <div className="w-full  flex justify-center items-center bg-[url(./assets/images/test.svg)] bg-no-repeat bg-cover">
      <iframe
        className="  w-full md:w-[1900px] h-[250px] md:h-[720px]"
        src="https://player.vimeo.com/video/825813801"
        title="attio.com"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default ScreenViedos;
