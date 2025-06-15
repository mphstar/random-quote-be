import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaQuoteLeft,
  FaTiktok,
} from "react-icons/fa6";


export function Twibbon({ text, category, imgUrl }: { text: string; category: string; imgUrl: string }) {
  return (
    <html>
      <head>
        <title>Twibbon</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        ></link>

        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Lilita+One&display=swap" rel="stylesheet"></link>
        <script src="https://cdn.tailwindcss.com"></script>

        <style>{`
        
.lilita-one-regular {
  font-family: "Lilita One", sans-serif;
  font-weight: 400;
  font-style: normal;
}

body {
  width: 512px;
  height: 512px;
  margin: 0;
}

.lato-thin {
  font-family: "Lato", sans-serif;
  font-weight: 100;
  font-style: normal;
}

.lato-light {
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.lato-regular {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.lato-bold {
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.lato-black {
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-style: normal;
}

.lato-thin-italic {
  font-family: "Lato", sans-serif;
  font-weight: 100;
  font-style: italic;
}

.lato-light-italic {
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-style: italic;
}

.lato-regular-italic {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: italic;
}

.lato-bold-italic {
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-style: italic;
}

.lato-black-italic {
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-style: italic;
}

        `}</style>
      </head>
      <body className="bg-blue-100 flex flex-col items-center lato-regular">
        <img
          className="fixed z-[2]"
          src={imgUrl}
          alt="Image Background"
        />
        <div className="flex-1 w-full flex items-center justify-center px-24 z-[4]">
          <div className="flex flex-col w-full">
            <div className="bg-slate-800 p-1 w-full text-white">
              <h1>{category}</h1>
            </div>
            <div className="bg-white p-4 flex flex-col">
              <FaQuoteLeft className="text-blue-600" size={42} />
              <h1 className="text-xl line-clamp-6 lilita-one-regular">
                {text}
              </h1>

              <span className="mt-6 text-sm italic text-gray-600">Quote</span>
            </div>
            <div className="w-full h-2 bg-blue-600"></div>
          </div>
        </div>
        <div className="flex flex-row gap-2 bg-blue-800 w-full px-4 py-3 text-white items-center justify-between z-[4]">
          <div className="flex gap-3">
            <FaInstagram />
            <FaFacebook />
            <FaTiktok />
            {/* <span className="text-sm">Mphstar</span> */}
          </div>
          <span className="text-sm">Mphstar</span>
        </div>
      </body>
    </html>
  );
}
