"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Password Generator",
    description: "Generate a random password with the length of your choice.",
    image: "/images/projects/1.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Vinoshan/Password-Generator",
    previewUrl: "https://vinoshan.github.io/Password-Generator/",
  },
  {
    id: 2,
    title: "Tic-Tac-Toe",
    description: "This is a simple Tic-Tac-Toe game built using React.",
    image: "/images/projects/2.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Vinoshan/tic-tac-toe",
    previewUrl: "https://funny-dango-e5cf6c.netlify.app/",
  },
  {
    id: 3,
    title: "React Portfolio",
    description: " React-based portfolio application.",
    image: "/images/projects/3.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Vinoshan/React-Portfolio",
    previewUrl: "https://6544076667bf705cf8e0c95e--stupendous-malabi-a2c248.netlify.app/",
  },
  {
    id: 4,
    title: "Wealth Tracker",
    description: "Wealth Tracker is a web application that allows users to create and manage their finances and personal spending.",
    image: "/images/projects/4.png",
    tag: ["All", "Frontend", "Backend"],
    gitUrl: "https://github.com/Golnaz8/Wealth-Tracker",
    previewUrl: "https://boiling-gorge-22354-0c68df1ecb5a.herokuapp.com/",
  },
  {
    id: 5,
    title: "Social Network API",
    description: "API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.",
    image: "/images/projects/5.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/Vinoshan/Social-Network-API",
    previewUrl: "https://www.youtube.com/watch?v=sDRwKcK-VgM",
  },
  {
    id: 6,
    title: "E-Commerce",
    description: "E-Commerce Apparel Store is a full-stack MERN (MongoDB, Express, React, Node.js) application",
    image: "/images/projects/6.png",
    tag: ["All", "Frontend", "Backend"],
    gitUrl: "https://github.com/SanjeethTharmarajah/ekin",
    previewUrl: "https://ekin555-f6889f1fc8cf.herokuapp.com/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;