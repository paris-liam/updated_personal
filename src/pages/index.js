import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import Header from '../components/Header'
import About from '../components/About';
import Work from '../components/Work';
import Contact from '../components/Contact';
import {GridContainer} from '../style'

class IndexPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      scrollingLock: true,
      highlight: 1,
    };
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const contact_pos = document.getElementById('contactarea').offsetTop;
    const work_pos = document.getElementById('workarea').offsetTop - 10;
    const scrollMaxY = window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    if(window.scrollY === scrollMaxY){ this.setState({highlight:3})}
    else if(window.scrollY >= work_pos && window.scrollY <= contact_pos ){ this.setState({highlight:2})}
    else if(window.scrollY < work_pos){ this.setState({highlight:1})}
    else{ this.setState({highlight:3})}
  }
  render(){ return(
  <div>
  <Header scrollingLock={this.state.scrollingLock} whichhighlight={this.state.highlight} mainPage={true} />
  <GridContainer>
    <About />
    <Work />
    <Contact/>
  </GridContainer>
  </div>
)}}
export default IndexPage
