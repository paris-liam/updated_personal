import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import {AboutPanel, AboutGrid, AboutHeadshot, AboutText} from '../style'
import Headshot from '../images/liam-paris-headshot.jpg';
const About = () => (
  <AboutPanel id='About'>
    <h1>About</h1>
    <AboutGrid>
      <AboutHeadshot>
        <img src={Headshot}/>
      </AboutHeadshot>
      <AboutText>
        <p>
          Hey! My Name's Liam Paris, I'm a web developer focusing on Front-end and UI/UX.</p>
          <p>I'm really passionate about creating unique experience on the web.
          Web design is being homoginized with large, one-size-fits-all services, and we should fight that!
          Your website is such a powerful tool to communicate your style and purpose! Don't let it look like everyone else's!</p>
          <p>Currently based in NYC but open to relocation, I'd Love to discuss freelance projects or full-time opportunities, checkout my work and resume below and get in touch at <a href='mailto:paris.liam@gmail.com'>paris.liam@gmail dot com</a></p>
      </AboutText>
    </AboutGrid>
    <div id='workarea'></div>
  </AboutPanel>
)

export default About;
