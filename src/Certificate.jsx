import React, { useState } from "react";
import { FaAward, FaTimes } from "react-icons/fa";

import certi1 from "./assets/chaosproject.png";
import certi2 from "./assets/chaosproject.png";
import certi3 from "./assets/chaosproject.png";

export default function Certificate() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      image: certi1,
      title: "Frontend Development",
      desc: "Certificate of completing modern frontend training.",
    },
    {
      image: certi2,
      title: "UI/UX Design",
      desc: "Certificate for user interface and user experience design.",
    },
    {
      image: certi3,
      title: "React JS",
      desc: "Certificate of React JavaScript course.",
    },
  ];

  return (
    <section
      id="certificate"
      className="text-white px-4 sm:px-6 lg:px-8 py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="italic flex items-center gap-3 text-5xl sm:text-6xl md:text-7xl font-extrabold">
            Certificate <FaAward className="text-green-500" />
          </h1>
          <p className="text-gray-400 mt-3">
            click the certificate to view full image
          </p>
        </div>

        {/* slider */}
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-scroll w-max">
            {[...certificates, ...certificates].map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(item.image)}
                className="group relative min-w-[320px] sm:min-w-[400px] h-[260px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md flex-shrink-0 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt="certificate"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                  <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4">
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-green-500"
            >
              <FaTimes />
            </button>

            <img
              src={selectedImage}
              alt="preview"
              className="w-full max-h-[85vh] object-contain rounded-xl border border-green-500/50"
            />
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 15s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
}