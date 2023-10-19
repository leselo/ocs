import React from "react";
import { useState, useEffect } from "react";
import validator from "validator";

const About = () => {
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
    </>
  );
};

export default About;
