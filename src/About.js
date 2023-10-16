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

  const aa = useEffect(() => {
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

    console.log(fullNameErr + emailErr);
  }, [fullName, email, msg]);

  const OnCheckNewRegisterUser = async (e) => {
    // Check for Unique user ID and matching passwords
    document.getElementById("dis").classList.remove("clHidden");

    console.log("Saving new user in database");
    try {
      const response = await axios.post(
        SMTP_URL,
        JSON.stringify({ fullName, email, msg }),
        {
          headers: { "Content-Type": "application/json" }, //
          withCredentials: true,
        }
      );
      if (response?.status === 200) {
        const ss = document.getElementById("errMsg");
        ss.classList.remove("clHidden");
        const sa = document.getElementById("dis");
        sa.classList.remove("clHidden");
        setFullName("");
        setEmail("");
        setMsg("");
      }
      //console.log(response?.status);
      //console.log(response?.accessToken);
      //console.log(JSON.stringify(response));
    } catch (err) {
      if (!err?.response) {
        console.log("No Server Response");
      } else if (err.response?.status === 409) {
        console.log("Username Taken");
      } else {
        const ss = document.getElementById("errMsg");
        ss.classList.remove("clHidden");

        setStrNot("Message has not been sent!");
        setStrNewLine("Please contact us at: support@elosoft.com");
        setErrorNumber("error:" + err.response?.status);
        console.log("Registration: Failed");
      }
      //errRef.current.focus();
    }
  };

  return (
    <>
      <div>
        <center>
          <div style={{ padding: "80px" }}></div>
          <div
            className="cblack bg"
            style={{
              display: "flex",

              textAlign: "left",
            }}
          >
            <div style={{ width: "50%", color: "black" }}>
              <p className="text-justify">
                Our company embarked on its journey in early 1997 as a dedicated
                team of professional programmers skilled in Visual Basic, C,
                C++, and Visual C++. Our primary focus was on creating software
                tailored for Windows and Linux platforms. One of our early
                achievements was the development of Internet Clock Plus, a
                software that tracked internet usage during the era of dial-up
                internet, which was cutting-edge technology at the time.
              </p>
              <p className="text-justify">
                Over the years, we've continued to expand our portfolio,
                crafting numerous applications primarily designed for the
                Windows operating system. Around 1999, we took a significant
                leap by establishing our very own data center, giving
                individuals and businesses a web presence through
                NextWebhosting.com, a venture that still thrives today. In
                addition, we ventured into domain name provisioning and began
                crafting web solutions using technologies like ASP, ASPx, and
                PHP.
              </p>
              <p className="text-justify">
                As time progressed, we further diversified our expertise by
                venturing into the design and development of intelligent
                circuits based on PIC microcontrollers, catering to various
                custom orders. To achieve this, we primarily utilize the C
                programming language, while occasionally employing Assembly
                language. Our passion for designing and developing everything
                from small gadgets to complex circuitry remains as strong today
                as it was in our beginnings.
              </p>
              <p className="text-justify">
                In addition, we have consistently stayed at the forefront of
                evolving web technologies. Today, we harness the power of
                cutting-edge tools and frameworks, including React, CSS,
                server/client-side JavaScript, and HTML5. These technologies
                enable us to create dynamic Single Page Web Applications,
                enhancing our ability to provide modern and interactive web
                solutions.
              </p>
            </div>

            <div
              style={{
                float: "left",
                width: "50%",

                color: "black",
              }}
            >
              <div style={{ width: "fit-content", marginLeft: "140px" }}>
                <p>
                  <b>Contact Us:</b>
                </p>
                <section>
                  Your name: <small>{fullNameErr}</small>
                  <br />
                  <div style={{ height: "5px" }}></div>
                  <input
                    size="50"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  <br />
                  <br />
                  Your eMail: <small>{emailErr}</small>
                  <br />
                  <div style={{ height: "5px" }}></div>
                  <input
                    size="50"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br />
                  <br />
                  Message: <small>{msgErr}</small>
                  <br />
                  <div style={{ height: "5px" }}></div>
                  <textarea
                    rows="10"
                    cols="50"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  />
                </section>
                <input
                  style={{ float: "left", marginLeft: "10px" }}
                  type="button"
                  value="Clear"
                  disabled={
                    fullName.length === 0 &&
                    email.length === 0 &&
                    msg.length === 0
                      ? "{true}"
                      : ""
                  }
                  onClick={() => {
                    setFullName("");
                    setEmail("");
                    setMsg("");
                  }}
                />
                <input
                  style={{ float: "right", marginRight: "10px" }}
                  type="submit"
                  value="Submit"
                  id="submit"
                  disabled={
                    fullNameErr === "" && emailErr === "" && msgErr === ""
                      ? ""
                      : "{true}"
                  }
                  onClick={OnCheckNewRegisterUser}
                />
              </div>
            </div>
          </div>
        </center>
      </div>
      <div id="dis" className="dis clHidden"></div>
      <div id="errMsg" className="errMessage clHidden">
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
              document.getElementById("errMsg").classList.add("clHidden");
              document.getElementById("dis").classList.add("clHidden");
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
