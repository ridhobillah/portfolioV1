import React, { useEffect, useState } from "react";
import profile from "./assets/profile.png";
import absensi from "./assets/absensiproject.png";
import fakestore from "./assets/fakestoreproject.png";
import kamus from "./assets/kamusproject.png";
import wallpaper from "./assets/wallpaper.gif";
import cv from "./assets/sidowwwscv.png";
import rental from "./assets/rental.png";
import gympro from "./assets/gymproproject.png";
import chaos from "./assets/chaosproject.png";
import figmachaos from "./assets/figmachaos.png";
import AOS from "aos";
import "aos/dist/aos.css";
import LightPillar from "./LightPillar";
import { FaWhatsapp, FaInstagram, FaGithub, FaFigma } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { SiLaravel, SiBootstrap, SiMysql } from "react-icons/si";
import { FaAward, FaTimes } from "react-icons/fa";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaFlutter, FaDartLang } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";

import certi1 from "./assets/AI.png";
import certi2 from "./assets/JS.png";
import certi3 from "./assets/K3.png";
import certi4 from "./assets/WEB.png";
import FooterAI from "./FooterAI";

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      image: certi1,
      title: "Belajar dasar AI",
      desc: "( Dicoding )",
    },
    {
      image: certi2,
      title: "Dasar pemrograman js",
      desc: "( Dicoding )",
    },
    {
      image: certi3,
      title: "Keselamatan kerja",
      desc: "( K3 )",
    },
    {
      image: certi4,
      title: "Dasar pemrograman Web",
      desc: "( Dicoding )",
    },
  ];

  const skills = [
    "Laravel",
    "React",
    "MySQL",
    "Flutter",
    "PHP",
    "JavaScript",
    "Dart",
    "GitHub",
    "HTML",
    "CSS",
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 80,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans">
      <section className="relative h-screen w-full overflow-hidden bg-black text-white flex items-center md:justify-center">
        <div className="absolute inset-0">
          <img src={wallpaper} alt="" className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 bg-green-900/35" />
        </div>

        <div
          data-aos="zoom-in"
          className="relative z-10 px-6 text-left md:text-center"
        >
          <div className="inline-flex items-center gap-2 bg-green-950/40 border border-green-900 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest mb-3">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
            Welcome to my portfolio
          </div>

          <h1 className="text-diubah max-w-5xl text-5xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
            Hello I'm Muhammad <br />
            <span className="text-diubah italic font-extralight">
              Ridho Billah
            </span>
          </h1>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:justify-center">
            <a
              href="#project"
              className="w-full sm:w-auto inline-flex justify-center border border-white bg-white text-black px-8 py-3 rounded-lg font-medium transition hover:bg-white/20 hover:text-white"
            >
              Project
            </a>

            <a
              href="#aboutme"
              className="w-full sm:w-auto inline-flex justify-center border border-white/15 bg-white/15 px-8 py-3 rounded-lg font-medium transition hover:bg-white/20"
            >
              About me
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-black to-transparent" />
      </section>

      <div className="w-full overflow-hidden bg-green-900/70 py-4">
        <div className="marquee">
          {[...skills, ...skills, ...skills].map((skill, i) => (
            <span
              key={i}
              className="mx-8 text-white text-2xl font-medium whitespace-nowrap"
            >
              {skill} ✦
            </span>
          ))}
        </div>
      </div>

      <div
        id="aboutme"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36"
      >
        <section className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-center p-3">
          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            className="lg:col-span-7 order-2 lg:order-1 text-justify lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-green-950/40 border border-green-900 px-4 py-2 rounded-full text-xs uppercase font-bold tracking-widest text-green-400">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              About me
            </div>

            <h1 className="text-diubah italic text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-extrabold leading-none mt-4 text-green-500">
              Sidowwws
            </h1>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mt-7 mx-auto lg:mx-0 leading-relaxed">
              Hello, I'm a design enthusiast and a user-friendly website
              builder. I'm a team player, disciplined, and constantly striving
              to develop my programming and website design skills.
            </p>

            <div className="flex flex-nowrap justify-start lg:justify-start gap-5 sm:gap-6 mt-9 w-full">
              <a
                href="https://wa.me/628989209979"
                target="_blank"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-green-600 flex items-center justify-center text-green-600 hover:scale-110 transition-all duration-300 shrink-0"
              >
                <FaWhatsapp className="text-2xl sm:text-3xl" />
              </a>

              <a
                href="https://instagram.com/sidowwws"
                target="_blank"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-green-500 hover:text-green-500 hover:scale-110 transition-all duration-300 shrink-0"
              >
                <FaInstagram className="text-2xl sm:text-3xl" />
              </a>

              <a
                href="https://github.com/ridhobillah"
                target="_blank"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-green-500 hover:text-green-500 hover:scale-110 transition-all duration-300 shrink-0"
              >
                <FaGithub className="text-2xl sm:text-3xl" />
              </a>
            </div>
          </div>

         <div
  data-aos="zoom-in"
  data-aos-duration="1200"
  className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 px-4 overflow-visible"
>
  <div
    className="relative group border-4 border-green-500 rounded-3xl overflow-hidden
    w-full max-w-[310px] sm:max-w-[380px] md:max-w-[460px]
    aspect-[4/3]
    bg-green-900/70 p-5 sm:p-7 md:p-8 flex flex-col justify-between
    -rotate-6 hover:rotate-0 transition duration-500"
  >
    <div className="text-gray-50 z-10">
      <span className="font-bold text-5xl sm:text-6xl md:text-7xl">
        Rd
      </span>
      <p className="text-sm sm:text-base md:text-lg opacity-80 mt-2">
        Fullstack Developer
      </p>
    </div>

    <a
      href={cv}
      className="relative z-20 w-fit text-sm sm:text-base duration-300 hover:bg-green-500 border hover:text-gray-50 bg-gray-50 font-semibold text-green-900 px-5 py-3 flex items-center gap-2 rounded-lg"
    >
      View CV
    </a>

    <div className="absolute -bottom-10 -right-12 sm:-bottom-10 sm:-right-16 opacity-90 pointer-events-none">
      <svg
        className="w-56 sm:w-72 md:w-96 translate-x-8 translate-y-8 group-hover:scale-110 transition duration-500 fill-gray-50 stroke-green-200"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
      >
        <path
          d="M50.4 51C40.5 49.1 40 46 40 44v-1.2a18.9 18.9 0 0 0 5.7-8.8h.1c3 0 3.8-6.3 3.8-7.3s.1-4.7-3-4.7C53 4 30 0 22.3 6c-5.4 0-5.9 8-3.9 16c-3.1 0-3 3.8-3 4.7s.7 7.3 3.8 7.3c1 3.6 2.3 6.9 4.7 9v1.2c0 2 .5 5-9.5 6.8S2 62 2 62h60a14.6 14.6 0 0 0-11.6-11z"
          strokeWidth="4"
        />
      </svg>
    </div>
  </div>
</div>
        </section>
      </div>
      <div
        id="project"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24"
      >
        <section className="space-y-10 mt-5 p-1">
          <div data-aos="fade-up">
            <h1 className="text-diubah italic flex items-center gap-3 text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none mb-4 text-white">
              Project
              <FaCode />
            </h1>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl">
              some projects that I worked on
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
            <article
              data-aos="zoom-in-up"
              className="w-full rounded-lg shadow-lg overflow-hidden border border-green-500/50 bg-black"
            >
              <img
                className="object-cover h-52 sm:h-56 md:h-60 w-full"
                src={kamus}
                alt="project"
              />

              <div className="flex flex-col gap-1 mt-4 px-4">
                <h2 className="italic text-lg font-semibold text-white">
                  Kamus inggris
                </h2>
                <span className="text-gray-400">Website</span>
              </div>

              <div className="flex gap-4 mt-4 px-4">
                <button
                  className="rounded-full p-2"
                  style={{ background: "#61DBFB" }}
                >
                  <RiReactjsFill size={18} color="white" />
                </button>
                <button className="rounded-full bg-blue-400 p-2">
                  <RiTailwindCssFill size={18} color="white" />
                </button>
              </div>

              <div className="mt-4 p-4 border-t border-gray-700">
                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/ridhobillah/Kamusproject.git"
                    target="_blank"
                    className="bg-green-900 hover:bg-green-800 px-4 py-2 rounded-md flex items-center gap-2 text-white"
                  >
                    <FaGithub />
                    Github
                  </a>

                  <h1
                    className="text-transparent text-4xl sm:text-5xl font-bold"
                    style={{ WebkitTextStroke: "1px #22c55e" }}
                  >
                    01
                  </h1>
                </div>
              </div>
            </article>

            <article
              data-aos="zoom-in-up"
              className="w-full rounded-lg shadow-lg overflow-hidden border border-green-500/50 bg-black"
            >
              <img
                className="object-cover h-52 sm:h-56 md:h-60 w-full"
                src={absensi}
                alt="project"
              />

              <div className="flex flex-col gap-1 mt-4 px-4">
                <h2 className="italic text-lg font-semibold text-white">
                  Absensi pegawai
                </h2>
                <span className="text-gray-400">Website</span>
              </div>

              <div className="flex gap-4 mt-4 px-4">
                <button className="bg-red-500 p-2 rounded-full">
                  <SiLaravel size={18} color="white" />
                </button>
                <button className="bg-purple-500 p-2 rounded-full">
                  <SiBootstrap size={18} color="white" />
                </button>
                <button className="bg-blue-500 p-2 rounded-full">
                  <SiMysql size={18} color="white" />
                </button>
              </div>

              <div className="mt-4 p-4 border-t border-gray-700">
                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/ridhobillah/Projectmandirilaravel.git"
                    target="_blank"
                    className="bg-green-900 hover:bg-green-800 px-4 py-2 rounded-md flex items-center gap-2 text-white"
                  >
                    <FaGithub />
                    Github
                  </a>

                  <h1
                    className="text-transparent text-4xl sm:text-5xl font-bold"
                    style={{ WebkitTextStroke: "1px #22c55e" }}
                  >
                    02
                  </h1>
                </div>
              </div>
            </article>

            <article
              data-aos="zoom-in-up"
              className="w-full rounded-lg shadow-lg overflow-hidden border border-green-500/50 bg-black"
            >
              <img
                className="object-cover h-52 sm:h-56 md:h-60 w-full"
                src={fakestore}
                alt="project"
              />

              <div className="flex flex-col gap-1 mt-4 px-4">
                <h2 className="italic text-lg font-semibold text-white">
                  Fake store app
                </h2>
                <span className="text-gray-400">Website</span>
              </div>

              <div className="flex gap-4 mt-4 px-4">
                <button
                  className="rounded-full p-2"
                  style={{ background: "#61DBFB" }}
                >
                  <RiReactjsFill size={18} color="white" />
                </button>
                <button className="rounded-full bg-blue-400 p-2">
                  <RiTailwindCssFill size={18} color="white" />
                </button>
              </div>

              <div className="mt-4 p-4 border-t border-gray-700">
                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/ridhobillah/Fakestore.git"
                    target="_blank"
                    className="bg-green-900 hover:bg-green-800 px-4 py-2 rounded-md flex items-center gap-2 text-white"
                  >
                    <FaGithub />
                    Github
                  </a>

                  <h1
                    className="text-transparent text-4xl sm:text-5xl font-bold"
                    style={{ WebkitTextStroke: "1px #22c55e" }}
                  >
                    03
                  </h1>
                </div>
              </div>
            </article>

           
            <article
              data-aos="zoom-in-up"
              className="w-full rounded-lg shadow-lg overflow-hidden border border-green-500/50 bg-black"
            >
              <img
                className="object-cover h-52 sm:h-56 md:h-60 w-full"
                src={chaos}
                alt="project"
              />

              <div className="flex flex-col gap-1 mt-4 px-4">
                <h2 className="italic text-lg font-semibold text-white">
                  Chaos app
                </h2>
                <span className="text-gray-400">Aplikasi</span>
              </div>

              <div className="flex gap-4 mt-4 px-4">
                <button className="rounded-full bg-blue-600 p-2">
                  <FaFlutter size={18} />
                </button>
                <button className="rounded-full bg-blue-500 p-2">
                  <FaDartLang size={18} />
                </button>
              </div>

              <div className="mt-4 p-4 border-t border-gray-700">
                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/ridhobillah/Flutter-chaos.git"
                    target="_blank"
                    className="bg-green-900 hover:bg-green-800 px-4 py-2 rounded-md flex items-center gap-2 text-white"
                  >
                    <FaGithub />
                    Github
                  </a>

                  <h1
                    className="text-transparent text-4xl sm:text-5xl font-bold"
                    style={{ WebkitTextStroke: "1px #22c55e" }}
                  >
                    04
                  </h1>
                </div>
              </div>
            </article>

     
             <article
              data-aos="zoom-in-up"
              className="w-full rounded-lg shadow-lg overflow-hidden border border-green-500/50 bg-black"
            >
              <img
                className="object-cover h-52 sm:h-56 md:h-60 w-full"
                src={gympro}
                alt="project"
              />

              <div className="flex flex-col gap-1 mt-4 px-4">
                <h2 className="italic text-lg font-semibold text-white">
                  Gympro
                </h2>
                <span className="text-gray-400">Aplikasi</span>
              </div>

              <div className="flex gap-4 mt-4 px-4">
                <button className="rounded-full bg-blue-600 p-2">
                  <FaFlutter size={18} />
                </button>
                <button className="rounded-full bg-blue-500 p-2">
                  <FaDartLang size={18} />
                </button>
              </div>

              <div className="mt-4 p-4 border-t border-gray-700">
                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/ridhobillah/Flutter-gympro.git"
                    target="_blank"
                    className="bg-green-900 hover:bg-green-800 px-4 py-2 rounded-md flex items-center gap-2 text-white"
                  >
                    <FaGithub />
                    Github
                  </a>

                  <h1
                    className="text-transparent text-4xl sm:text-5xl font-bold"
                    style={{ WebkitTextStroke: "1px #22c55e" }}
                  >
                    05
                  </h1>
                </div>
              </div>
            </article>

                   <article
              data-aos="zoom-in-up"
              className="w-full rounded-lg shadow-lg overflow-hidden border border-green-500/50 bg-black"
            >
              <img
                className="object-cover h-52 sm:h-56 md:h-60 w-full"
                src={rental}
                alt="project"
              />

              <div className="flex flex-col gap-1 mt-4 px-4">
                <h2 className="italic text-lg font-semibold text-white">
                  RentCycle (rental motor)
                </h2>
                <span className="text-gray-400">Website</span>
              </div>

              <div className="flex gap-4 mt-4 px-4">
                <button className="rounded-full bg-green-600 p-2">
                  <SiExpress size={18} />
                </button>
                <button className="rounded-full p-2" style={{ background: "#61DBFB" }}>
                  <RiReactjsFill size={18} />
                </button>
              </div>

              <div className="mt-4 p-4 border-t border-gray-700">
                <div className="flex justify-between items-center">
                 <div className="flex gap-1 items-center">
                   <a
                    href="https://github.com/ridhobillah/Backendujikelayakan"
                    target="_blank"
                    className="bg-green-900 hover:bg-green-800 px-4 py-2 rounded-md flex items-center gap-2 text-white"
                  >
                    <FaGithub />
                    Backend
                  </a>
                    <a
                    href="https://github.com/ridhobillah/Frontendujikel"
                    target="_blank"
                    className="bg-green-900 hover:bg-green-800 px-4 py-2 rounded-md flex items-center gap-2 text-white"
                  >
                    <FaGithub />
                    Frontend
                  </a>
                 </div>

                  <h1
                    className="text-transparent text-4xl sm:text-5xl font-bold"
                    style={{ WebkitTextStroke: "1px #22c55e" }}
                  >
                    06
                  </h1>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>

      <section
        id="certificate"
        className="text-white px-4 sm:px-6 lg:px-8 py-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div data-aos="fade-right" className="mb-12">
            <h1 className="text-diubah italic flex items-center gap-3 text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4">
              Certificate <FaAward className="text-green-500" />
            </h1>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl">
              click the certificate to view full image
            </p>
          </div>

          {/* slider */}
          <div className="overflow-hidden" data-aos="zoom-in">
            <div className="flex gap-6 animate-scroll w-max">
              {[...certificates, ...certificates].map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(item.image)}
                  className="group relative min-w-[300px] sm:min-w-[380px] h-[240px] sm:h-[260px] rounded-lg overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md flex-shrink-0 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt="certificate"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 border-3 border-green-600/40"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6 flex flex-col justify-end">
                    <h2 className="text-xl sm:text-xl font-extrabold italic mb-2">
                      {item.title}
                    </h2>
                    <p className="text-lg font-medium text-gray-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* modal */}
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
      </section>

      {/* custom animation */}
      <style>{`
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

        @media (max-width: 640px) {
          .animate-scroll {
          animation: scroll 20s linear infinite;
        }
  }
      `}</style>

      <FooterAI />
    </div>
  );
}
