import React from 'react'
import Link from 'gatsby-link'
import Overdrive from 'react-overdrive';
import { ProjectGrid, ProjectCopy } from '../style';
import TACover from '../images/tacover.png'
import xx from '../images/ryanpedia2.png'
import xxx from '../images/ryanpedia3.png'
import xxxx from '../images/ryanpedia4.png'
import Header from '../components/Header';
import { Icon } from 'react-icons-kit';
const TrainingAmigo = () => (
  <div>
    <Header scrollingLock='true' mainPage={false} />
    <ProjectGrid>
      <Overdrive className='OverdriveImage' id='TA'>
            <Carousel className='carousel' infiniteLoop={true} width='65%' dynamicHeight={true} showThumbs={false}>
                <div>
                    <img src={xx} />
                </div>
                <div>
                    <img src={xxx}  />
                </div>
                <div>
                    <img src={xxxx}  />
                </div>
            </Carousel>
      </Overdrive>
      <ProjectCopy>
      <h3>TrainingAmigo</h3>
      <ul>
    <li> Developed new features and pages for the Training Amigo site such as: a Wellness Dashboard and brand new Registration Process. Primarily focused on the layouts and interactivity, but also contributed to the back-end of the site to insure data was being processed properly.</li>
<li>Collaborated with a designer to redesign a majority of the old site, making critical User experience decisions with an additional focus on longevity of the site</li>
<li>Organized a complete site redesign, switching from the Drupal framework to React. Mapped out and developed the new site as well as researching best possible practices and tools.</li>
      </ul>
      </ProjectCopy>
    </ProjectGrid>
  </div>
)

export default TrainingAmigo
