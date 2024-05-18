import React from 'react';

// Mock project data
const projects = [
  { id: 1, image: '/Screenshot 2024-05-17 224241.png', title: 'Fit-tone', discription: "Developed and maintained Fit-Tone, a comprehensive fitness tracker application enabling users to monitor their fitness progress and achieve their health objectives effectively." },
  { id: 2, image: '/Screenshot 2024-05-17 223520.png', title: 'Generative', discription: "Generative is a collaborative workspace platform designed to facilitate seamless collaboration, document creation, and content publishing. Powered by Next.js, React, and Node.js Express, it offers robust features for teams to work together effectively and efficiently." },
  { id: 3, image: '/Screenshot 2024-05-17 224104.png', title: 'ClassicSoul', discription: "ClassicSoul is an e-commerce website designed to offer a seamless shopping experience for users interested in modern fashion and accessories. The platform provides a wide range of products and features to meet the needs of fashion enthusiasts." },
  { id: 4, image: '/Screenshot 2024-05-18 093306.png', title: 'Netflix-Clone', discription: "Netflix-Clone is a streaming platform that has the functionalities of Netflix, allowing users to browse, and manage their favorite movies and TV shows. Built with React and Firebase, it provides an engaging and user-friendly interface for a seamless streaming experience." },
];

function Projects() {
  return (
    <div className='max-w-6xl mx-auto px-4 text-black'>
      <h1 className="text-3xl font-extrabold mb-6 text-blue-400">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">
        {projects.map(project => (
          <div key={project.id} className="bg-white shadow-md rounded-lg overflow-hidden relative group">
            <div className="relative">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-50" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <div className="text-white">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2">{project.discription}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
