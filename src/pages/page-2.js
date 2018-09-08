import React from 'react'
import Link from 'gatsby-link'
import Overdrive from 'react-overdrive';
const SecondPage = () => (
  <div>
    <h1>d</h1>
    <h1>d</h1>
    <h1>d</h1>
    <h1>d</h1>
    <h1>d</h1>
    <h1>d</h1>
    <h1>d</h1>
    <Overdrive id='Over'><Link to='/'><h1>Hi from the second page</h1></Link></Overdrive>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
