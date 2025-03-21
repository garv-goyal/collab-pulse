import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #141414, #1e1e1e);
  color: #fff;
`;

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #f9f9f9;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  border-bottom: 2px solid #ffffff;
  display: inline-block;
  padding-bottom: 0.5rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled.div`
  background: #1a1a1a;
  border: 2px solid transparent;
  border-image: linear-gradient(45deg,rgb(55, 129, 185),rgb(19, 18, 33)) 1;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.6);
  }
`;

const ProjectImage = styled.div`
  height: 180px;
  background: url(${props => props.image || 'https://via.placeholder.com/300x180'}) center/cover no-repeat;
`;

const ProjectContent = styled.div`
  padding: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color:rgb(248, 232, 233);
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  color: #ccc;
`;

const ProjectsSection = () => {
  const dummyProjects = [
    {
      id: 1,
      title: "Project A",
      description: "A demo project showcasing simulated real-time analytics with dynamic visualizations.",
      image: "https://via.placeholder.com/300x180?text=Project+Alpha"
    },
    {
      id: 2,
      title: "Project B",
      description: "A demo project tracking collaboration metrics and workflow efficiency through interactive charts.",
      image: "https://via.placeholder.com/300x180?text=Project+Beta"
    },
    {
      id: 3,
      title: "Project C",
      description: "A demo project displaying integrated tool insights and performance dashboards with interactive graphs.",
      image: "https://via.placeholder.com/300x180?text=Project+Gamma"
    },
  ];

  return (
    <ProjectsContainer id="projects">
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectsGrid>
        {dummyProjects.map(project => (
          <ProjectCard key={project.id}>
            <ProjectImage image={project.image} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
