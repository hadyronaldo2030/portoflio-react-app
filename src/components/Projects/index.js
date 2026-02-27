import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From Reacts. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'React' ?
            <ToggleButton active value="React" onClick={() => setToggle('React')}>React</ToggleButton>
            :
            <ToggleButton value="React" onClick={() => setToggle('React')}>React</ToggleButton>
          }
          <Divider />
          {toggle === 'Web Designer' ?
            <ToggleButton active value="Web Designer" onClick={() => setToggle('Web Designer')}>Web Design</ToggleButton>
            :
            <ToggleButton value="Web Designer" onClick={() => setToggle('Web Designer')}>Web Design</ToggleButton>
          }
          <Divider />
          {toggle === 'Ui/Ux' ?
            <ToggleButton active value="Ui/Ux" onClick={() => setToggle('Ui/Ux')}>Ui/Ux</ToggleButton>
            :
            <ToggleButton value="Ui/Ux" onClick={() => setToggle('Ui/Ux')}>UI/UX</ToggleButton>
          }
          <Divider />
          {toggle === 'Systems' ?
            <ToggleButton active value="Systems" onClick={() => setToggle('Systems')}>Systems</ToggleButton>
            :
            <ToggleButton value="Systems" onClick={() => setToggle('Systems')}>Systems</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects