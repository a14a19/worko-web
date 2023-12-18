import "./About.css";
import { FaTwitterSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";

const About = () => {
  return (
    <>
      <div className="cont">
        <div className="top">
          <p>OUR STORY</p>
        </div>
        <div className="top1">
          <h1>
            What you need to <br /> know about us
          </h1>
          <div className="top2">
            <p>
              World class development and built for performance, <br /> Taskify
              will deliver every time.
            </p>
          </div>
        </div>
        <div className="pic">
          <img
            src="https://framerusercontent.com/images/EpzISqCmGrjVC9ck0YbjqNR6I0.png"
            alt="img"
          />
        </div>
        <div className="top3">
          <div>
            <h1>22K+</h1>
            <p>Client retention</p>
          </div>
          <div>
            <h1>64M+</h1>
            <p>Emails per month</p>
          </div>
          <div>
            <h1>98%</h1>
            <p>Monthly campaigns</p>
          </div>
        </div>
        <div className="top4">
          <p>OUR TEAM</p>
          <h1>Worko</h1>
        </div>
        <div className="card">
          <div>
            <img
              src="https://ca.slack-edge.com/T06820YRUNT-U068GDPFTDZ-bd88e518d8ef-512"
              alt=""
            />
            <h1>Sridhar</h1>
            <p>Founder</p>
            <hr />
            {/* <div style={{display:"flex", color:"white", fontSize:"30px"}}> */}
            <span className="ic">
            <FaTwitterSquare />
            <CiLinkedin />
            <CiFacebook />
            </span>
            {/* </div> */}
          </div>
          <div>
            <img
              src="https://ca.slack-edge.com/T06820YRUNT-U068MREJ934-8748ae8e2191-512"
              alt=""
            />
            <h1>Divya Gowda</h1>
            <p>Founder</p>
            <hr />
            <span className="ic">
            <FaTwitterSquare />
            <CiLinkedin />
            <CiFacebook />
            </span>
          </div>
          <div>
            <img
              src="https://ca.slack-edge.com/T06820YRUNT-U068DV55ZSR-78c38e8a90d9-512"
              alt=""
            />
            <h1>Mohd Abdul Shoeb</h1>
            <p>Software Developer</p>
            <hr />
            {/* <div style={{display:"flex", color:"white", fontSize:"30px"}}> */}
            <span className="ic">
            <FaTwitterSquare />
            <CiLinkedin />
            <CiFacebook />
            </span>
          </div>
          <div>
            <img
              src="https://ca.slack-edge.com/T06820YRUNT-U068A8E2S4W-c550b4c081f3-512"
              alt=""
            />
            <h1>Archi Walia</h1>
            <p>Software Developer</p>
            <hr />
            {/* <div style={{display:"flex", color:"white", fontSize:"30px"}}> */}
            <span className="ic">
            <FaTwitterSquare />
            <CiLinkedin />
            <CiFacebook />
            </span>
          </div>
        </div>
        <div className="card">
          <div>
            <img
              src="https://ca.slack-edge.com/T06820YRUNT-U0695NKQJDN-5a79cc8459f1-512"
              alt=""
            />
            <h1>Anas Ahmed</h1>
            <p>Software Developer</p>
            <hr />
            <span className="ic">
            <FaTwitterSquare />
            <CiLinkedin />
            <CiFacebook />
            </span>
          </div>
          <div>
            <img
              src="https://ca.slack-edge.com/T06820YRUNT-U068DV50ABX-50043df912a7-512"
              alt=""
            />
           <h1>Ajay Singh</h1>
            <p>Software Developer</p>
            <hr />
            <span className="ic">
            <FaTwitterSquare />
            <CiLinkedin />
            <CiFacebook />
            </span>
          </div>
          <div>
            <img
              src="https://ca.slack-edge.com/T06820YRUNT-U068GT43CHY-f6975ea6217f-512"
              alt=""
            />
            <h1>Nawaz Sharief</h1>
            <p>Software Developer</p>
            <hr />
            <span className="ic">
            <FaTwitterSquare />
            <CiLinkedin />
            <CiFacebook />
            </span>
          </div>
          <div>
            <img
              src="https://ca.slack-edge.com/T06820YRUNT-U068GT2RYBC-bccf663d51cd-512"
              alt=""
            />
             <h1>Pisavadiya Chandni B</h1>
            <p>Software Developer</p>
            <hr />
            <span className="ic">
            <FaTwitterSquare />
            <CiLinkedin />
            <CiFacebook />
            </span>
          </div>
        </div>

        <div className="top5">
          <p>OUR CUSTOMERS</p>
          <h3>What people are saying</h3>
        </div>

        <div className="top6">
          <div>
            <p>
            Worko has revolutionized my productivity at Tech Innovators. I
              get more <br /> done in less time!
            </p>
            <div className="top6a">
                <img src="https://ca.slack-edge.com/T06820YRUNT-U068GDPFTDZ-bd88e518d8ef-512" alt="" />
                <div>
                <p>Sridhar</p>
                <p> Founder, Tech Innovators</p>
                </div>
            </div>
          </div>
          <div>
            <p>
              Worko has revolutionized my productivity at Tech Innovators. I
              get more <br /> done in less time!
            </p>
            <div className="top6a">
                <img src="https://ca.slack-edge.com/T06820YRUNT-U068MREJ934-8748ae8e2191-512" alt="" />
                <div>
                <p>Divya Gowda</p>
                <p>Hr</p>
                </div>
            </div>
            </div>
        </div>
        <div className="top6">
          <div>
            <p>
            Worko has revolutionized my productivity at Tech Innovators. I
              get more <br /> done in less time!
            </p>
            <div className="top6a">
                <img src="https://ca.slack-edge.com/T06820YRUNT-U068DV55ZSR-78c38e8a90d9-512" alt="" />
                <div>
                <p>Mohd Abdul Shoeb</p>
                <p>Software Developer</p>
                </div>
            </div>
          </div>
          <div>
            <p>
            Worko has revolutionized my productivity at Tech Innovators. I
              get more <br /> done in less time!
            </p>
            <div className="top6a">
                <img src="https://ca.slack-edge.com/T06820YRUNT-U0695NKQJDN-5a79cc8459f1-512" alt="" />
                <div>
                <p>Anas Ahmed</p>
                <p>Software Engineer</p>
                </div>
            </div>
          </div>
        </div>
        <div className="top6">
          <div>
            <p>
            Worko has revolutionized my productivity at Tech Innovators. I
              get more <br /> done in less time!
            </p>
            <div className="top6a">
                <img src="https://ca.slack-edge.com/T06820YRUNT-U068A8E2S4W-c550b4c081f3-512" alt="" />
                <div>
                <p>Archi Walia</p>
                <p>Software Engineer</p>
                </div>
            </div>
          </div>
          <div>
            <p>
            Worko has revolutionized my productivity at Tech Innovators. I
              get more <br /> done in less time!
            </p>
            <div className="top6a">
                <img src="https://ca.slack-edge.com/T06820YRUNT-U068GT43CHY-f6975ea6217f-512" alt="" />
                <div>
                <p>Nawaz Sharief</p>
                <p>Software Engineer</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;