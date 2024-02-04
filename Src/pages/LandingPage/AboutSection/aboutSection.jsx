import React from "react";
import "./aboutSection.scss";
import Slide from "react-reveal/Slide";

const AboutSection = () => {
    return (
      <>
        <section id="about">
          <div className="about-container">
            <div className="about-main-grid">
              <Slide up>
                <div className="about-title-container">
                  <span>About Me</span>
                </div>
              </Slide>
  
              <div className="about-content-container">
                {`Khush Joshi, ${new Date().getFullYear() - 2002}`}
                <br />
                Ontario, Canada
                <p>
                  I am a <strong>Data Engineer / Full Stack BI </strong> Developer who is
                  currently pursuing Graduate Certificate in <strong>Business Analyics</strong> from
                  St. Lawrence College in Kingston, Ontario, Canada. I have harbored a passion for 
                  technology ever since I discovered the vast potential inherent in harnessing data.
                </p>
                <p>
                  I have learnt and applied concepts from various CS domains like{" "}
                  <strong>AI</strong>, <strong>Android</strong>,{" "}
                  <strong>Machine Learning</strong> and even{" "}
                  <strong>Business Intelligence</strong> into small and big projects I
                  undertook over the years individually as well as in a team. I
                  find my predilection towards Data Engineering and Data Science rather special though.
                  I am always in search of making meaningful contributions in any
                  organisation alongside more like-minded people.
                </p>
                <p>
                  When I'm not coding, I spend my time playing CS:GO and watching
                  movies.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default AboutSection;