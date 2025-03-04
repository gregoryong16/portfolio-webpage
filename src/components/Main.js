import { Container, Box, Avatar, Button, ButtonGroup } from "@chakra-ui/react";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { MdEmail } from "react-icons/md";
import profile_pic from "../images/profile-photo-cropped.jpg";
import Avatar1 from "./Avatar1";
import resume from "../files/Gregory's_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import AnimatedPage from "./AnimatedPage";
import Copyright from "./Copyright";

export default function Main() {
  return (
    <AnimatedPage>
      <div className="main-wrap">
        <Container class="main">
          <Canvas
            camera={{ position: [2, 0, 12.25], fov: 15 }}
            style={{
              backgroundColor: "#FFFFFF",
              width: "400px",
              height: "400px",
            }}
          >
            <ambientLight intensity={1.0} />
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.3} />

            <Suspense fallback={null}>
              <Avatar1 position={[0.025, -0.9, 0]} />
            </Suspense>

            <OrbitControls />
          </Canvas>
          <Box className="main-intro-box">
            <Box className="main-intro-subbox">
              <h1 className="intro-name">Hi, I&apos;m Gregory!</h1>
              <h2 className="intro-description">
                I'm a full-time Software Engineer at JPMorgan and a Computer Science graduate from Nanyang Technological University. I’m passionate about building impactful solutions and continuously upgrading my technical skills.
              </h2>
            </Box>
            <Avatar size="2xl" src={profile_pic} />
          </Box>
          <div className="main-resume">
            <ButtonGroup variant="outline" spacing="6">
              <Button
                rightIcon={<AiOutlineDownload />}
                colorScheme="teal"
                variant="solid"
              >
                <a href={resume} download="Gregory's Resume.pdf">
                  {" "}
                  Resume
                </a>
              </Button>
            </ButtonGroup>
          </div>
        </Container>
        <h1 className="socials_tag">Feel free to connect with me! </h1>

        <div className="socials_bar">
          <a href="https://github.com/gregoryong16" className="github_icon">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>

          <a
            href="https://www.linkedin.com/in/gregory-ong-191555209/"
            className="linkedin_icon"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>

          <a href="mailto:gregory.ong16@gmail.com" className="email_icon">
            <MdEmail size="2em" />
          </a>

          <a
            href="https://www.instagram.com/gregory.ong/"
            className="instagram_icon"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
      <Copyright />
    </AnimatedPage>
  );
}
