import React from 'react';
import Link from 'gatsby-link';
import Overdrive from 'react-overdrive';
import {ProjectGrid} from '../style';
import Header from '../components/Header';
import RyanpediaCover from '../images/ryanpediaCover.png';
import { Icon } from 'react-icons-kit';
import {chevronLeft,chevronRight} from 'react-icons-kit/fa/chevronLeft';
const Ryanpedia = () => (
  <div>
    <Header scrollingLock="true" mainPage={false}  />
    <ProjectGrid>
      <Overdrive id="RY" className="OverdriveImage"><img src={RyanpediaCover} /></Overdrive>
      {/*<Icon icon={chevronLeft} />
      <Icon icon={chevronRight} />*/}
      <h3>Ryanpedia</h3>
      <ul>
        <li>Worked with my Client (comedian Ryan Creamer) to create a portfolio site based in the style of Wikipedia.</li>
        <li>Reverse-engineered Wikipedia's style, colors, fonts and logo</li>
        <li>Setup backend CMS and configured it to update the portfolio as nessisary</li>
        <li> Created using GatsbyJS, React, NetlifyCMS and hosted using Netlify</li>
      </ul>
    </ProjectGrid>
  </div>
);

export default Ryanpedia;
