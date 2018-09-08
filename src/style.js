import styled from 'styled-components';
import Overdrive from 'react-Overdrive';

const color1 = '#BA6874';
const color2 = 'white';
const color3 = '#0A437A';
const font1 = 'Amaranth';
const font2 = 'Titillium Web';

//header
export const Head = styled.div`
  z-index:1000;
  background-color: ${color3};
  width:100%;
  display:grid;
  height:auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:'. name links';
  color:${color1};
  @media(max-width: 800px){
    height:auto;
    grid-template-columns: auto
    grid-template-rows: auto auto;
    grid-template-areas:'name' 'links ';
  }
`;
export const Name = styled.div`
  grid-area:name;
  text-align:center;
  display:grid;
  grid-template-columns:auto;
  grid-template-rows:1fr 1fr;
  h1{
      margin-bottom:0px;
      font-family:${font1};
  }
  ul{
      display:inline-flex;
      width:auto;
      margin-left:auto;
      margin-right:auto;
      margin-bottom:0px;
      a{
          text-decoration:none;
          color:${color1}
      }
      svg:hover{
          color:${color2}
      }
  }
`;
export const Links = styled.div`
  grid-area: links;
`
export const LinksList = styled.ul`
  font-family:${font2};
  display:flex;
  justify-content:space-evenly;
  list-style:none;
  color:${color2};
  a{
      text-decoration:none;
      color:inherit;
  }
  a:active{
    text-decoration:none;
  }
  a:focus{
    text-decoration:none;
  }
  a:hover{
      color:${color1}
  }
  @media(max-width: 800px){
      display:flex;
      color:${color2};
      a:hover{
        color:black;
      }
      margin:0px;
  }
`;


//main page
export const GridContainer = styled.div`
  display:grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
`;
const Panel = styled.div`
  height:auto;
  text-align:center;
  display:grid;
  grid-template-rows: 3rem auto 5rem;
  grid-template-columns:auto;
  h1{
      font-family: ${font1};
  }
  p{
      font-family:${font2}
  }
`;
export const AboutPanel = Panel.extend`
  min-height:15rem;
  background-color:${color1};
  color:${color2};
`;
export const AboutGrid = styled.div`
  display:grid;
  grid-template-columns:2fr 2fr;
  grid-template-rows: auto;
  grid-template-areas: 'headshot text';
  @media(max-width:800px){
    grid-template-columns:auto;
    grid-template-rows: auto auto;
    grid-template-areas: 'headshot' 'text';
  };
`;
export const AboutHeadshot = styled.div`
  grid-area:headshot;
  display:grid;
  align-items:center;
  justify-items:center
  img{
      width:50%
      border-radius:100%;
  }
  @media(max-width:800px){
      padding-top:10px;
  }
`;
export const AboutText = styled.div`
  margin-top:2rem;
  grid-area:text;
  text-align:left;
  p{
      font-size:1.25em
  }
  padding-left:10px;
      padding-right:10px;
`
export const WorkPanel = Panel.extend`
  min-height:30rem;
  background-color:${color2};
  color:${color1};
`;
export const WorkGrid = styled.div`
 display:grid;
 grid-template-columns: auto;
 grid-template-rows: auto;
 grid-template-areas: 'gallery';
`;
export const WorkGallery = styled.div`
  grid-area: gallery;
  display:grid;
  grid-template-columns: 1fr 10fr 10fr 10fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap:1rem;
  grid-template-rows: auto;
  background-color:${color2};
  font-family:${font2};
  @media(max-width:800px){
    grid-template-columns:auto;
    grid-template-rows: 1rem auto auto auto 1rem
  }
  a{
    text-decoration:none;
  }
  a>div{
    height:100%;
  }
`;
export const WorkNav = styled.div`
  display:grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-area: nav;
  background-color:${color2};
`;
export const ButtonNav = styled.div`
position:relative;
  display:inherit;
  height:40%;
  align-self:center;
  justify-self:center;
  background-color: black;
  border-radius:10px;
  font-family: ${font1};
  div{
    padding:5px;
    display:grid;
    span{
      display:block;
      justify-self:center;
      align-self:center;
      padding:10px;
      color:${color2};
      font-size:25px;
    }
  }
`;
export const ProjectTile = styled.div`
  background-color:${color2};
  height:100%;
  display:grid;
  p{
    align-self:flex-end;
    justify-self:center;
    font-family:${font2};
    color:${color1};
    border:none;
  };
  h4{
    font-family:${font2};
    align-self:center;
    justify-self:center;
    z-index:4
  };
  img{
    justify-self:center;
    align-self:center;
    width:50%;
  }

`;
{/*export const ProjectTileHolder = ProjectTile.extend`
display:block;
div.placeholder{
    background-color:#565759;
    opacity: 0.5;
    border-radius:30px;
    z-index:3
  }
`*/}
export const ToolTile = styled.div`
  background-color:yellow;
`

export const ContactPanel = Panel.extend`
  min-height:30rem;
  background-color:${color1};
  color:${color2};
  grid-template-columns: 1fr 1fr;
  grid-template-rows:auto auto;
  grid-template-areas: 'title title' 'resume contactform';
  @media(max-width:800px){
    grid-template-columns: 1fr;
    grid-template-rows:auto auto auto;
    grid-template-areas: 'title' 'resume' 'contactform';
    grid-row-gap: 20px;
  }
`;
export const ContactTitle = styled.h1`
  grid-area: title
  a{
      font-size:18px;
      font-family: ${font2};
  color:${color2};
      text-decoration:none;
  }
  a:hover{
      border-bottom:1px solid
  }
`;
export const ContactResume = styled.div`
  grid-area: resume;
  a{
      color:${color2};
      text-decoration:none;
      h2{
        display:inline-block;
        margin-bottom:10px;
        font-family:${font2};
      }
  }
  a:hover > h2{
      border-bottom:1px solid;
  }
`;
export const ContactForm = styled.form`
  grid-area: contactform;
`;
export const FormRow = styled.div`
  input{
      font-family:${font2};
      padding:5px;
      border-radius:20px;
      outline:none;
      border:none;
      width:50%;
  }
  textarea{
      font-family:${font2};
      padding:5px;
      width:50%;
      border-radius:20px;
      outline:none;
      border:none;
  }
  margin-bottom:5px;
`;
export const FormButton = styled.div`
  font-family:${font2};
  width:30%;
  border-radius:20px;
  display: block;
  margin-left:auto;
  margin-right:auto;
  background-color:${color2};
  color:${color1};
`;
export const ShadeDiv = styled.div`
  background-color: grey;
  width:100%;
  height:50%;
  z-index:100;
  opacity:0.5;
  position: absolute;
  top:50%;
  border-radius:10px;
`;
export const ProjectGrid = styled.div`
  background-color: ${color1};
  color:${color2};
  font-family:${font2}
  display:grid;
  grid-template-columns: auto ;
  grid-template-rows:auto auto;
  grid-template-areas: 'overdriveImage' 'Copy';
  div.OverdriveImage{
    display: block;
    margin-left:auto;
    margin-right:auto;
    grid-area:'overdriveImage';
    & > .carousel > .carousel-slider{
      display: block;
      margin-left:auto;
      margin-right:auto;
    }
  }
`;

export const ProjectCopy = styled.div`

`