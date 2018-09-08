import React from 'react'
import {Link,withPrefix} from 'gatsby-link'
import styled from 'styled-components';
import {ContactPanel, ContactTitle, ContactResume, ContactForm, FormRow,FormButton} from '../style'
import {fileTextO} from 'react-icons-kit/fa/fileTextO'
import {Icon} from 'react-icons-kit';

const Contact = () => (
  <ContactPanel id='Contact'>
    <ContactTitle>Contact<br/><a href='mailto:paris.liam@gmail.com'>email: paris.liam at gmail.com</a></ContactTitle>
      <ContactResume><a target='_blank' href={withPrefix('/static/Liam-Paris-resume.pdf')}><h2>Resume</h2><br/> <Icon icon={fileTextO} size={'20%'}></Icon></a></ContactResume>
      <ContactForm name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <FormRow>
            <label hidden htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="name" />
        </FormRow>
        <FormRow>
            <label hidden htmlFor="email">Email</label>
            <input type="text" name="email" id="email" placeholder="email" />
        </FormRow>
        <FormRow>
            <label hidden htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6" placeholder="message"></textarea>
        </FormRow>
        <FormButton type="submit" value="Send Message" className="special">Send</FormButton>
</ContactForm>
    <div></div>
  </ContactPanel>
)

export default Contact
