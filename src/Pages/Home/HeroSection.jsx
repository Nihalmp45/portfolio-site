import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Nihal</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Passionate about crafting seamless user experiences with React, React Native, and Next.js. <br />
          Skilled in building scalable backend solutions with Node.js and Express.js.
          </p>
        </div>
        <div style={{marginTop:30}}>
        <Link className="btn btn-primary"  activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact">Get In Touch</Link>
        </div>
      </div>
      <div className="hero--section--img">
        <img style={{borderRadius:50,width:500,marginLeft:100}} src="./img/Nihal.jpeg" alt="Hero Section" />
      </div>
    </section>
  );
}
