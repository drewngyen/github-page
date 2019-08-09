import React from "react";
import Card from "./Card";
import styled from "styled-components";

const ProjectContainer = styled.div`
  display: flex;
  place-content: center;
`;

function Projects() {
  return (
    <ProjectContainer>
      <Card title="HelloCard" />
      <Card title="HelloCard" />
    </ProjectContainer>
  );
}

export default Projects;
