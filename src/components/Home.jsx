import React from 'react';
import lg2 from '../assets/lg2.png';
import wlcm from '../assets/wlcm.png';
import img from '../assets/img.png';
import clb from '../assets/clb.png';
import crn from '../assets/crn.png';
import aboutteemmeet from '../assets/aboutteemmeet.jpg'
import t1 from '../assets/t1.png';
import t2 from '../assets/t2.png';
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import InfiniteScroll from './InfiniteScroll';
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <div className='bg-black'>
        <div className='flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20'>
          <div className='relative flex flex-col items-center px-4 pt-20 mt-40 lg:pt-40 lg:pl-20 lg:items-start'>
            <img src={crn} alt="" className='hidden lg:block absolute -mt-[88px] -ml-16' />
            <img src={wlcm} alt="" className='w-[300px] md:w-[500px] lg:w-[600px] self-start' />
            <div className='flex flex-col items-center mt-5 lg:flex-row'>
              <div className='group'>
                <img
                  src={lg2}
                  alt=""
                  className='w-[250px] md:w-[400px] lg:w-[550px] h-auto max-h-[100px] md:max-h-[125px] mb-4 lg:mb-0 transition-transform duration-300 transform group-hover:rotate-6'
                />
              </div>
              <div className='group'>
                <img
                  src={clb}
                  alt=""
                  className='w-[150px] md:w-[220px] lg:w-[270px] h-auto max-h-[60px] md:max-h-[90px] mt-2 lg:mt-5 transition-transform duration-300 transform group-hover:rotate-6'
                />
              </div>
            </div>
            <p className='p-5 pb-24 ml-2 text-xl font-semibold text-center text-white md:text-3xl lg:text-4xl lg:text-left'>
              We are the Tech club of SRM
            </p>
          </div>

          <div className='hidden lg:block'>
            <div className='group'>
              <img
                src={img}
                alt=""
                className='w-[250px] md:w-[350px] lg:w-[400px] transition-transform duration-300 transform group-hover:rotate-6'
              />
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center gap-8 pb-16'>
          <a
            href='https://www.instagram.com/codenex_srmist'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center p-3 transition-colors duration-200 border-2 rounded-full hover:border-cyan-300'
          >
            <GrInstagram size={20} className='text-white hover:text-cyan-300' />
          </a>
          <a
            href='https://x.com/CodeNexClub?t=YuNrpDf1yt_E6nFkK7jyUA&s=09'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center p-3 transition-colors duration-200 border-2 rounded-full hover:border-cyan-300'
          >
            <FaTwitter size={20} className='text-white hover:text-cyan-300' />
          </a>
          <a
            href='https://www.linkedin.com/company/code-nex-club-srmist/posts/?feedView=all'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center p-3 transition-colors duration-200 border-2 rounded-full hover:border-cyan-300'
          >
            <FaLinkedinIn size={20} className='text-white hover:text-cyan-300' />
          </a>
          <a
            href='https://whatsapp.com/channel/0029VamkMtaEgGfG4qkPDZ3V'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center p-3 transition-colors duration-200 border-2 rounded-full hover:border-cyan-300'
          > 
            <IoLogoWhatsapp size={20} className='text-white hover:text-cyan-300' />
          </a>
        </div>

        <div className='px-6 sm:px-12 md:px-24'>
          <div>
            <p className='p-8 mt-16 text-4xl font-extrabold text-white'>ABOUT US</p>
          </div>

          <div className='flex flex-col items-center justify-between pb-10 md:flex-row lg:flex-row'>
            <div className='flex-1 p-8 text-center lg:text-left'>
              <p className='w-full mt-0 text-xl font-semibold text-white md:text-xl lg:text-xl'>
                Codenex is a dynamic and innovative student club established to promote technical excellence and collaborative learning in the field of computer science. Founded by Parth Nath Chauhan, the club operates under the guidance of its esteemed faculty convener, Dr. Sundarrajan M, whose vision and support have been instrumental in its growth.
              </p>
              <p className='w-full mt-12 text-xl font-semibold text-white md:text-xl lg:text-xl'>
                Codenex functions under the Network and Communications Department, a hub for technological advancements and research, led by the dedicated Head of Department, M. Laxmi. The club’s primary objective is to provide students with a platform to enhance their technical skills, engage in cutting-edge projects, and prepare for real-world challenges in the tech industry.
              </p>

              <a href="/teams">
                <button className='p-2 mt-10 text-purple-600 border-2 border-purple-600 rounded-full sm:p-3 hover:border-purple-400 hover:text-purple-400'>
                  MEET THE TEAM
                </button>
              </a>
            </div>

            <div className='flex justify-center mt-6 lg:justify-start lg:mt-0'>
              <img src={aboutteemmeet} alt="aboutteemmeet" className='w-full max-w-[300px] md:max-w-[550px] h-auto' />
            </div>
          </div>
        </div>

        <div className="h-[50vh] flex flex-col items-center justify-center font-bold text-3xl">
          <div className="relative z-10 py-8 text-white transform border-2 border-white bg-neutral-800 -rotate-12 top-14">
            <InfiniteScroll>
              <li>CREATIVE</li>
              <li>NON TECH</li>
              <li>TECHNICAL</li>
            </InfiniteScroll>
          </div>
          <div className="py-10 bg-white">
            <InfiniteScroll>
              <li>HACKATHON </li>
              <li>WORKSHOPS </li>
              <li>INTERNSHIPS</li>
              <li>PROJECTS</li>
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;