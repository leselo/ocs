import React from "react";
import axios from "./posts";
import { useState, useEffect } from "react";
import validator from "validator";
import env from "react-dotenv";

const SMTP_URL = process.env.REACT_APP_SMTP_URL;

const About = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [fullNameErr, setFullNameErr] = useState("");
  const [msgErr, setMsgErr] = useState("");
  const [strNot, setStrNot] = useState("Message has been sent. Thank you.");
  const [strNewLine, setStrNewLine] = useState("");
  const [errorNumber, setErrorNumber] = useState("");
  const [hideMessage, setHideMessage] = useState(true);

  useEffect(() => {
    fullName.length > 0
      ? setFullNameErr("")
      : setFullNameErr("Enter your full name");
    msg.length > 20
      ? setMsgErr("")
      : setMsgErr("Enter your message (min 20 chars)");

    email.length > 0
      ? validator.isEmail(email)
        ? setEmailErr("")
        : setEmailErr("Enter a valid email")
      : setEmailErr("");
    email.length === 0 && setEmailErr("Enter your email");
    //console.log(fullNameErr + emailErr);
  }, [fullName, email, msg]);

  return (
    <>
      <div>
        <div style={{ background: "inherit", padding: "40px" }}></div>

        <div className="about">
          <div className="bgw50cb">
            <p>
              Our company embarked on its journey in early 1997 as a dedicated
              team of professional programmers skilled in Visual Basic, C, C++,
              and Visual C++. Our primary focus was on creating software
              tailored for Windows and Linux platforms. One of our early
              achievements was the development of Internet Clock Plus, a
              software that tracked internet usage during the era of dial-up
              internet, which was cutting-edge technology at the time.
            </p>
            <p>
              Over the years, we've continued to expand our portfolio, crafting
              numerous applications primarily designed for the Windows operating
              system. Around 1999, we took a significant leap by establishing
              our very own data center, giving individuals and businesses a web
              presence through NextWebhosting.com, a venture that still thrives
              today. In addition, we ventured into domain name provisioning and
              began crafting web solutions using technologies like ASP, ASPx,
              and PHP.
            </p>
            <p>
              As time progressed, we further diversified our expertise by
              venturing into the design and development of intelligent circuits
              based on PIC microcontrollers, catering to various custom orders.
              To achieve this, we primarily utilize the C programming language,
              while occasionally employing Assembly language. Our passion for
              designing and developing everything from small gadgets to complex
              circuitry remains as strong today as it was in our beginnings.
            </p>
            <p>
              In addition, we have consistently stayed at the forefront of
              evolving web technologies. Today, we harness the power of
              cutting-edge tools and frameworks, including React, CSS,
              server/client-side JavaScript, and HTML5. These technologies
              enable us to create dynamic Single Page Web Applications,
              enhancing our ability to provide modern and interactive web
              solutions.
            </p>
          </div>
        </div>
      </div>
      <div id="dis" className={`${hideMessage && "clHidden"}`}></div>

      <div id="errMsg" className={`errMessage ${hideMessage && "clHidden"}`}>
        <div
          style={{
            display: "flex",
            position: "relative",
            width: "100%",
            background: "yellow",
          }}
        >
          <div style={{ color: "black" }}>
            &nbsp;Note&nbsp;&nbsp;&nbsp;{errorNumber}
          </div>

          <div
            id="divErrMsg"
            onClick={() => {
              setHideMessage(true);
            }}
            style={{
              order: "2",
              color: "black",
              cursor: "pointer",
              marginLeft: "auto",
            }}
          >
            X&nbsp;
          </div>
        </div>
        &nbsp; <br />
        <br />
        <br />
        {strNot}
        <br />
        {strNewLine}
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default About;
