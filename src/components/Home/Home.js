import React, { useContext, useState, useEffect } from "react"
import Fade from "react-reveal/Fade"
import { Container, Row, Col } from "react-bootstrap"
import StoreName from "../StoreName/StoreName"
// import AboutImg from '../Image/AboutImg';
import StoreContext from "../../context"

const Home = () => {
  const { home } = useContext(StoreContext)
  const { storeName, headerOne, headerTwo } = home

  const [isDesktop, setIsDesktop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true)
      setIsMobile(false)
    } else {
      setIsMobile(true)
      setIsDesktop(false)
    }
  }, [])

  return (
    <section id="home">
      <Container>
        <Col md={6} sm={12}>
          <Fade
            left={isDesktop}
            bottom={isMobile}
            duration={1000}
            delay={1000}
            distance="30px"
          >
            <div className="about-wrapper__info">
              <p className="about-wrapper__info-text">{storeName}</p>
              <p className="about-wrapper__info-text">{headerOne}</p>
              <p className="about-wrapper__info-text">{headerTwo}</p>

              {/* {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={require("../../mock/EricBourneResume.pdf")}
                      download
                    >
                      Download Resume
                    </a>
                  </span>
                )} */}
            </div>
          </Fade>
        </Col>
      </Container>
    </section>
  )
}

export default Home
