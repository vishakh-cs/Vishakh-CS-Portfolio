// components/Home.js
"use client"
import Image from 'next/image';
import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import ReactImage from '../public/3909258.webp'
import NodeImage from '../public/R (5).jpg';
import ExpressImage from '../public/express-js-1.jpeg';
import NextJSImage from '../public/next-JS-framework.png';
import TypeScriptImage from '../public/10b88c68-typescript-logo.png';
import JavaScriptImage from '../public/opp.png';
import AWS from '../public/AWS.png';
import docker from '../public/docker.jpg';
import firebase from '../public/firebase.jpg';
import mongo from '../public/mongo.jpg';
import tailwind from '../public/tailwind.jpg';
import { ContactDialog } from '@/Components/shadcn/Dialog';
import Projects from '@/Components/Projects';


function Home() {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "/Vishakh CS resume.pdf";
    link.download = 'Vishakh_CS_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="relative" style={{ fontFamily: 'Maven Pro, sans-serif' }}>
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="absolute inset-0 flex flex-col">
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              width: '10px',
              height: '10px',
              animation: `moveDots 4s linear infinite`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
    </div>
  
    <div className="flex justify-center items-center h-screen z-10 relative">
      <div className="w-full sm:w-2/3 flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <div className="text-center sm:text-right sm:pr-8 mb-4 sm:mb-0">
            <p className="text-lg md:text-xl lg:text-2xl">Hi, I'm Vishakh C S</p>
            <p className="text-lg md:text-xl lg:text-2xl">Software Developer</p>
            <div className="mt-4 flex justify-center items-center cursor-pointer">
              <button
                onClick={handleDownload}
                className="flex items-center text-white border border-white rounded py-2 px-4 mr-4 hover:bg-white hover:text-blue-600 z-20"
              >
                <FaFileDownload className="mr-2" />       
                Resume
              </button>
              <ContactDialog />
              </div>

            </div>
          </div>
          <div className="w-full sm:w-1/2 flex justify-center items-center">
            <div className="h-72 sm:h-96 w-72 sm:w-96 relative mb-8 sm:mb-0 rounded-full bg-gradient-to-br from-gray-300 to-gray-950 overflow-hidden">
              <div className="rounded-full overflow-hidden">
                <Image
                  src="/20240405_164439-Photoroom.png-Photoroom.png"
                  alt="profile"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="border-blue-500 w-3/4 border-2" />
      </div>
      <div className="py-10 h-screen">
        <div className="max-w-6xl mx-auto px-4 text-white">
          <h2 className="text-3xl font-extrabold mb-3 text-center  cursor-pointer" > <span className='text-blue-400 '>About Me</span></h2>
          <h3 className="text-2xl font-bold font-sans cursor-pointer">Vishakh CS</h3>
          <h5 className="text-lg font-medium mb-2 text-yellow-300">Full Stack Developer</h5>
          <p className="text-lg">Passionate and driven full stack developer with a strong foundation in MERN Stack and NextJS. Dedicated to creating dynamic and user-centric web applications. Eager to contribute my expertise in both frontend and backend frameworks, modern UI/UX design, and responsive development to a forward-thinking team,
            while continuously learning and growing in the ever-evolving world of web development.</p>
          <p className="text-base mt-4">In my free time, I enjoy hiking, reading books, and learn new things.</p>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-10 py-5 overflow-x-auto">
          <h3 className="text-center font-sans font-bold">
            <span className="border-2 p-3">Tech Stacks</span>
          </h3>
          <div className="flex justify-start mt-6 space-x-4 mt-4 scroll-container text-black">
            {/* React */}
            <div className="w-72 bg-gray-200 p-4 rounded-lg shadow-md tech-stack-box text-center relative">
              <div className="absolute inset-0 rounded-full">
                <Image src={ReactImage} alt="React" layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-lg font-semibold mb-2">React</h3>
            </div>
            {/* Node.js */}
            <div className="w-72 bg-gray-200 p-4 rounded-lg shadow-md tech-stack-box text-center relative">
              <div className="absolute inset-0 rounded-full">
                <Image src={NodeImage} alt="Node.js" layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Node.js</h3>
            </div>
            {/* Express.js */}
            <div className="w-72 bg-gray-200 p-4 rounded-lg shadow-md tech-stack-box text-center relative">
              <div className="absolute inset-0 rounded-full">
                <Image src={ExpressImage} alt="Express.js" layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Express.js</h3>
            </div>
            {/* Next.js */}
            <div className="w-72 bg-gray-200 p-4 rounded-lg shadow-md tech-stack-box text-center relative">
              <div className="absolute inset-0 rounded-full">
                <Image src={NextJSImage} alt="Next.js" layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Next.js</h3>
            </div>
            {/* TypeScript */}
            <div className="w-72 bg-gray-200 p-4 rounded-lg shadow-md tech-stack-box text-center relative">
              <div className="absolute inset-0 rounded-full">
                <Image src={TypeScriptImage} alt="TypeScript" layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-lg font-semibold mb-2">TypeScript</h3>
            </div>
            {/* JavaScript */}
            <div className="w-72 bg-gray-200 p-4 rounded-lg shadow-md tech-stack-box text-center relative">
              <div className="absolute inset-0 rounded-full">
                <Image src={JavaScriptImage} alt="JavaScript" layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-lg font-semibold mb-2">JavaScript</h3>
            </div>

          </div>

          <div className="flex justify-start space-x-4 mt-14 scroll-container text-black">
            {/* React */}
            <div className="w-72 bg-gray-200 p-4 rounded-lg shadow-md tech-stack-box2 text-center relative">
              <div className="absolute inset-0 rounded-full">
                <Image src={AWS} alt="React" layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AWS</h3>
            </div>
            {/* Node.js */}
            <div className="w-72 bg-gray-200 p-4 rounded-lg shadow-md tech-stack-box2 text-center relative">
              <div className="absolute inset-0 rounded-full">
                <Image src={docker} alt="Node.js" layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-lg font-semibold mb-2">docker</h3>
            </div>
            {/* Express.js */}
            <div className="w-72 bg-gray-200 p-4 rounded-lg shadow-md tech-stack-box2 text-center relative">
              <div className="absolute inset-0 rounded-full">
                <Image src={firebase} alt="Express.js" layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-lg font-semibold mb-2">firebase</h3>
            </div>
            {/* Next.js */}
            <div className="w-72 bg-gray-200 p-4 rounded-lg shadow-md tech-stack-box2 text-center relative">
              <div className="absolute inset-0 rounded-full">
                <Image src={mongo} alt="Next.js" layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-lg font-semibold mb-2">mongo</h3>
            </div>
            {/* TypeScript */}
            <div className="w-72 bg-gray-200 p-4 rounded-lg shadow-md tech-stack-box2 text-center relative">
              <div className="absolute inset-0 rounded-full">
                <Image src={tailwind} alt="TypeScript" layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-lg font-semibold mb-2">tailwind</h3>
            </div>

          </div>

        </div>
      </div>

       <Projects />


      <div className="py-10">
        <div className="max-w-6xl mx-auto px-4 text-black">
          <h2 className="text-3xl font-extrabold mb-6 text-blue-400">My Timeline</h2>
          {/* Education 1 */}
          <div className="bg-gray-400 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold mb-2">2023 - Present</h3>
            <h2 className='capitalize font-bold'>Internship: Full Stack Development</h2>
            <h3 className='font-bold'>-Brototype</h3>
          </div>
          {/* Education 2 */}
          <div className="bg-gray-400 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold mb-2">2019 - 2023</h3>
            <h2 className='capitalize font-bold'>Bachelor of Science in Computer Science</h2>
            <h3 className='font-bold'>-Kerala University</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;