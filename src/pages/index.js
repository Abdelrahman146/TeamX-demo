import React from "react"
import Link from "gatsby-link";

import Contact from "../components/Contact.js";

import '../styles/main.scss';
import '../styles/buttons.scss'
import '../styles/_avalanche.scss'
import LandingBox from "../components/LandingBox";
import HorizontalList from "../components/HorizontalList";


import aboutImage from '../media/about-us.png';
import web_img from '../media/svg/web.svg';
import seo_img from '../media/svg/seo.svg';
import mob_img from '../media/svg/mob.svg';
import sec_img from '../media/svg/sec.svg';

const PrimaryButton = props => (
  <a type={props.type} className="PrimaryButton" href={props.to}>
    {props.text}
  </a>
);

const SecondaryButton = props => (
  <a className="SecondaryButton" href={props.to}>
    {props.text}
  </a>
);

const Web_icon = () => (
  <svg>
    <use xlinkHref={`#${web_img.id}`} />
  </svg>
);

const Seo_icon = () => (
  <svg>
    <use xlinkHref={`#${seo_img.id}`} />
  </svg>
);

const Mob_icon = () => (
  <svg>
    <use xlinkHref={`#${mob_img.id}`} />
  </svg>
);


const Sec_icon = () => (
  <svg>
    <use xlinkHref={`#${sec_img.id}`} />
  </svg>
);


const Card = props => (
  <div className="card-container">
    <div className="card-content">
      <div className="card-icon">
        {props.cardIcon}
      </div>
      <div className="card-title"><h3>{props.cardTitle}</h3></div>
      <div className="card-text"><p>{props.cardText}</p></div>
      <div className="card-button"><SecondaryButton to={props.cardLink} text="Discover"/></div>
    </div>
  </div>
);

export default () => (
  <div className="container">
    <LandingBox>
    <div className="welcome-text grid grid__center">
      <div className="1/2--lap 1/2--desk grid__cell">
      <h1>Welcome To teamX</h1>
      <h4>together we build the future</h4>
      <p>containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.</p>
      <HorizontalList>
        <li><PrimaryButton to="#contaxt" text="About Us" /></li>
        <li><SecondaryButton to="#home" text="About Dubai10X" /></li>
      </HorizontalList>
      </div> 
    </div>
    </LandingBox>
    <div className="c">
    <section className="content-container">
      <div className="content">
        <div className="grid grid__center">
          <div className="1/2--lap grid__cell">
            <h1 className="text-center">A new Era of Information Technology</h1>
          </div>
        </div>
        <div className="grid grid__middle">
          <div className="1/3--desk grid__cell">
            <img className="image aboutImage" src={aboutImage} alt="about us" />
          </div>
          <div className="2/3--desk grid__cell">
            <p>TeamX IT Solutions is a well-reputed service provider Company. We honor our valuable clients with best IT solutions in UAE. We specialize in web designing, IT Security, mobile application development and Web hosting and domain registration. We also help in elevating your business through SEO and Social Media Marketing strategies. Our mission is to deliver the best services that help grow your business faster and better.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="">
      <div className="grid grid__center">
          <div className="1/2--lap grid__cell">
            <h1 className="text-center section-title">We Give You</h1>
          </div>
        </div>
        <div className="grid">
        <div className="1/4--desk grid__cell">
      <Card
      cardIcon={<Web_icon/>}
      cardTitle="Web Solutions"
      cardText="Our goal is to build websites that communicate effectively for our clients, and produce results. If sounds like a whole lot of marketschpeak, it is. But it’s also true. We love well designed websites, but a site that is organized, has a clear hierarchy, executes an effective sales funnel, and speaks to your customers is better. It’s the only way to do it."
      cardLink="#web"
      />
      </div>
      <div className="1/4--desk grid__cell">
      <Card
      cardIcon={<Mob_icon/>}
      cardTitle="Mobile Development"
      cardText="TeamX IT Solutions clearly understands the revolution in the field of E-commerce in Dubai. In this era of technology, TeamX provides assistance in smartphone app development in Dubai. Be it android or IOS, TeamX IT Solutions has a complete team of professionals to best assist their clients in Dubai."
      cardLink="#mobile"
      />
      </div>
      <div className="1/4--desk grid__cell">
      <Card
      cardIcon={<Seo_icon/>}
      cardTitle="Digital Marketing"
      cardText="Search engine optimisation Search engine marketing Internet advertising Web analysis Blog marketing. Search engine optimisation Search engine marketing Internet advertising Web analysis Blog marketing. Search engine optimisation Search engine marketing Internet advertising Web analysis Blog marketing."
      cardLink="#business"
      />
      </div>
      <div className="1/4--desk grid__cell">
      <Card
      cardIcon={<Sec_icon/>}
      cardTitle="IT Security"
      cardText="In the field of IT Security, we deal in Website Security and connecting your Payment methods with the online store with full Security. Moreover, we also provide systems security, penetration, forensic and Firm IT Security Audit at a high level in Dubai.and Firm IT Security Audit at a high level in Dubai."
      cardLink="#security"
      />
      </div>
        </div>
      </div>
    </section>
    <br/>
    <footer>
    <div className="footer grid grid--flush">
        <div className="1/2--desk flush__cell grid__cell">
        <div className="form">
          <h1>Contact</h1>
          <form
            name="contact"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={Contact.handleSubmit}
          >
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <div className="grid">
            <div className="1/2--desk grid__cell">
              <label>
                Your name:<br />
              <input className="input-form" type="text" name="name" onChange={Contact.handleChange}/>
              </label>
            </div>
            <div className="1/2--desk grid__cell"p>
              <label>
                Your email:<br />
                <input className="input-form" type="email" name="email" onChange={Contact.handleChange}/>
              </label>
            </div>
            </div>
            <div className="grid">
            <div className="grid__cell">
              <label>
                Message:<br />
                <textarea rows="5" className="input-form" name="message" onChange={Contact.handleChange}/>
              </label>
            </div>
            </div>
            <div className="grid">
            <div className="1/3--lap grid__cell">
              <button className="PrimaryButton" type="submit">Send</button>
            </div>
            </div>
          </form>
         </div>
        </div>
        <div className="1/2--desk flush__cell grid__cell">
          <div className="banner">
            <h2 className="banner-text">We love our customers</h2>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="grid__cell footer-text">
          <h3>This Website is developed and Designed with love by <Link className="dev" to="/">TeamX web solutions</Link> - 2018</h3>
        </div>
      </div>
    </footer>
    </div>
    </div>
);
