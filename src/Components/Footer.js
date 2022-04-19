import React from "react";
import { Button } from "./Button";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "C:/Users/gupta/3D Objects/College 8th sem project/efire/src/stylesheets/FooterStyles.js";
 import 'C:/Users/gupta/3D Objects/College 8th sem project/efire/src/Pages/Footer.css'
const Footer = () => {
  return (
   <Box>
      <Container>
      <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the newsletter to receive our best deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email '
            />
            <Button buttonStyle='btn--outline' >Subscribe</Button>
          </form>
        </div>
      </section>
      </div>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Policy</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Products</FooterLink>
            <FooterLink href="#">Investors</FooterLink>
            <FooterLink href="#">Careers</FooterLink>

          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Contact</FooterLink>
            <FooterLink href="#">Support</FooterLink>
            <FooterLink href="#">Info.</FooterLink>
            <FooterLink href="#">Our Location</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
        <h1 style={{
          color: "green",
          textAlign: "center",
          marginTop: "0px"
        }}>
          LitOnline@2022 Designed by: <i>Team [PDVPN] version 1.0</i>
        </h1>
      </Container>
    </Box>
  );
};
export default Footer;