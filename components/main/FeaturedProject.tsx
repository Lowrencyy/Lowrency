import React from "react";
import ProjectCard from "../sub/ProjectCard";

const FeaturedProject = () => {
    return (
      <section>
          <div
          className="flex flex-col items-center justify-center mb-20"
          id="projects"
        >
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            Featured Project's
          </h1>
          <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
         <a href="https://cinezone.netlify.app/">
         <ProjectCard
              src="/Cinezone.png"
              title="CINEZONE.NETLIFY.APP"
              description="A Movie Website Utilizing HTML, CSS and javascript also Fetching Data From The TMDB API"
              
            />
         </a>
            <ProjectCard
              src="/Kodecamp.png"
              title="KODECAMP86.NETLIFY.APP"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <ProjectCard
              src="/koderesto.png"
              title="KODERESTO86.NETLIFY.APP"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              
            />
            <ProjectCard
              src="/kodenews.png"
              title="KODENEWS"
              description="A Website Utilizing Pure HTML CSS with context of News"
            />
          </div>

          {/* additional project for future purposes  */}
          {/* <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-5">
            <ProjectCard
              src="/NextWebsite.png"
              title="Modern Next.js Portfolio"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <ProjectCard
              src="/CardImage.png"
              title="KODENEWS.NETLIFY.APP"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <ProjectCard
              src="/SpaceWebsite.png"
              title="Space Themed Website"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              
            />
            <ProjectCard
              src="/SpaceWebsite.png"
              title="Space Themed Website"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              
            />
          
           
          </div> */}
        </div>
      </section>
      );
}

export default FeaturedProject