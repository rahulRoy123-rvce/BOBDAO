import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>USER NFTs</h2>
                <p>Unlock new NFTs and Unlock New Possibilities</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">ROOKIE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">CHIEF</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">MARSHAL</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      {/* <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row> */}
                    <img src="https://lh3.googleusercontent.com/mt4GBHyp-24TURTsjouA91Lo2jEJztp6kLUYGdnz9FIuUfCdywRgs-iBA3RZJuU0HOInF6UNOBdMf0lWgb-e-3HARoR6ttw1QyDUa4U=w600"></img>


                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <img src="https://lh3.googleusercontent.com/NK5AN5NSqoWkFZEOckUxbzn66KVSqA2F13fFlIAlEJgHreAZCtmYYLn6NgD9OuHpcKR-_Tfb4RnVcOCRJIed1vbUEzw7De5YklkmXQ=w600"></img>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
<img src="https://lh3.googleusercontent.com/wtxb3_WvJTNq_H6Vp5xF5_PxEQwVATxbabtbYhGSsdMkeYKfhNuw0-GsYdIirljhpGQuIWh8Fe4GbGFJ0CaY_i2_xSEe2HfEWQMcNQ=w600"></img>

                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
