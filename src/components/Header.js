import React from 'react'
import {Link, withPrefix} from 'gatsby-link'
import styled from 'styled-components';
import Shot from '../images/liam-paris-headshot.jpg'
import Scrollchor from 'react-scrollchor';
import {Head, Name, Links, LinksList, IconLinks} from '../style'
import { Icon } from 'react-icons-kit'
import {linkedinSquare, angellist, github} from 'react-icons-kit/fa/'


class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      headHeight:100
    }
    this.resizeHead = this.resizeHead.bind(this);

  }

  resizeHead(){
    let head = document.getElementById('headBar');
    console.log(head);
    {head !== null && this.setState({ headHeight: head.getBoundingClientRect().height})
    }

  }
  componentDidMount(){
    this.resizeHead();
  }
  render(){
    return(
      <div style={{height: `${this.state.headHeight}px` }} id='aboutarea'>
        <Head style={{position: this.props.scrollingLock ? "fixed" : "static"}} id='headBar'>
          <Name>
            <h1>Liam Paris</h1>
            <ul>
              <a target='_blank' href='https://www.linkedin.com/in/liam-paris/'><Icon size='25' icon={linkedinSquare}/></a>
              <a target='_blank' href='https://angel.co/liam-paris-1'><Icon size='25'icon={angellist}/></a>
              <a target='_blank' href='https://github.com/paris-liam'><Icon size='25'icon={github}/></a>
            </ul>
          </Name>
          <Links>
            <LinksList>
              <li>
              {this.props.mainPage ? (
                <Scrollchor to="#aboutarea" style={{borderBottom: this.props.whichhighlight === 1 ? "solid 1px":"none"}}>About</Scrollchor>
              ) : (
                <a href='/#aboutarea'>About</a>
              )}
              </li>
              <li>
                {this.props.mainPage ? (
                <Scrollchor to="#workarea" style={{borderBottom: this.props.whichhighlight === 2 ? "solid 1px":"none"}} >Work</Scrollchor>
              ) : (
                <a href='/#workarea'>Work</a>
              )}
              </li>
              <li>
                {this.props.mainPage ? (
                <Scrollchor to="#contactarea" style={{borderBottom: this.props.whichhighlight === 3 ? "solid 1px":"none"}}>Contact</Scrollchor>
              ) : (
                <a href='/#contactarea'>Contact</a>
              )}
              </li>
              <li><a target='_blank' href={withPrefix('/static/Liam-Paris-resume.pdf')}>Resume</a></li>
            </LinksList>
          </Links>
        </Head>
      </div>
    )
  }
}
export default Header


