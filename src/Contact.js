import React from "react";
import axios from "./posts";
import { useState, useEffect } from "react";
import validator from "validator";

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

  const OnCheckNewRegisterUser = async (e) => {
    // Check for Unique user ID and matching passwords
    setHideMessage(false);

    //console.log("Saving new user in database");
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
        setHideMessage(false);
        setFullName("");
        setEmail("");
        setMsg("");
      }
      //console.log(response?.status);
      //console.log(response?.accessToken);
      //console.log(JSON.stringify(response));
    } catch (err) {
      setStrNot("Message has not been sent!");
      setStrNewLine("Please contact us at: support@elosoft.com");
      setErrorNumber("error:" + err.response?.status);
      if (!err?.response) {
        setErrorNumber("No response from server");
        setHideMessage(false);
        console.log("No Server Response");
      } else if (err.response?.status === 409) {
        setErrorNumber("409 - Username Taken");
        console.log("Username Taken");
      } else {
        setHideMessage(false);
        setErrorNumber(err.response?.status + " - Registration: Failed");
        console.log("Registration: Failed");
      }
    }
  };

  return (
    <>
      <div>
        <div style={{ background: "inherit", padding: "80px" }}></div>

        <div
          style={{
            display: "flex",
            width: "100%",
            margin: "0px",
            background: "inherit",
            placeContent: "center",
          }}
        >
          <div // *************************************Right side: conatct form
            style={{
              width: "fit-content",
              color: "black",
              background: "inherit",
            }}
          >
            <div style={{ width: "100%" }}>
              <p>
                <b>Contact Us:</b>
              </p>
              <section>
                Your name: <small>{fullNameErr}</small>
                <br />
                <div style={{ height: "5px" }}></div>
                <input
                  size="37"
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
                  size="37"
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
                  cols="37"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                />
              </section>
              <br />
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
