import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import Overdrive from 'react-overdrive'
import RyanpediaCover from '../images/ryanpediaCover.png'
import TACover from '../images/tacover.png'
import {WorkPanel,WorkGrid,WorkGallery,WorkNav,ProjectTile,ToolTile, ButtonNav,ShadeDiv,ProjectTileHolder} from '../style'
class Work extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      buttonHighlight:true,
    };
    //this.buttonMove = this.buttonMove.bind(this)
  }

  buttonMove(){
    this.state.buttonHighlight = !this.state.buttonHighlight

  }
  render(){
    return(
  <WorkPanel id='Work'>
    <h1>Work</h1>
    <WorkGrid>
      <WorkGallery>
        <div></div>
        <Link to='/ryanpedia/'><Overdrive id='RY'><ProjectTile>
          <img src={RyanpediaCover} />
          <p>Ryanpedia</p>
        </ProjectTile></Overdrive></Link>
        <Link to='/training-amigo/'><Overdrive id='TA'><ProjectTile>
          <img src={TACover} />
          <p>TrainingAmigo</p>
        </ProjectTile></Overdrive></Link>
        <ProjectTile>
          <h4>Current Projects to be posted soon!</h4>
        </ProjectTile>
        <div></div>
      </WorkGallery>
    </WorkGrid>
    <div id='contactarea'></div>
  </WorkPanel>
    )
  }
}
export default Work
