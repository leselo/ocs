import React from "react";
import oscf from "./images/OCSF.png";
import oscb from "./images/OCSB.png";
import "./css/App.css";
// Main (default) page used as OCS
// uses diaplay: GRID
const Main = () => {
  return (
    <div className="divgrid">
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>

      <div className="item"></div>
      <div className=" span3 cblack text-justify font12">
        <p className="itema">
          Experience a new level of efficiency and convenience with our
          automatic Occupancy Counter Sensor. Stay in control of occupancy
          levels effortlessly and enhance safety in your space.
          <br />
          Introducing our state-of-the-art automatic Occupancy Counter Sensor,
          designed to revolutionize the way you monitor and manage occupancy
          levels. This advanced sensor seamlessly toggles between{" "}
          <span className="highlight">N/O</span> (Normally Open),{" "}
          <span className="highlight">C</span> (Common), and{" "}
          <span className="highlight">N/C</span> (Normally Closed) positions,
          providing real-time data on the number of people passing by. Mounted
          on the door jamb or walkway opening, it ensures that anyone in front
          of the sensor is accurately counted. Say goodbye to the days of "Last
          person shut-off the lights. signs."
        </p>
      </div>
      <div claassName="item"></div>

      <div className="item"></div>
      <div>
        <div className="item">
          <div className="card">
            <img src={oscf} alt="OCS-Front" style={{ width: "100%" }} />
            <div className="container">
              <h4>
                <b>Front</b>
              </h4>
              <p className="pblue">Direction into the room: Right to Left</p>
            </div>
          </div>
        </div>
        <br />
        <div className="item">
          <div className="card">
            <img src={oscb} alt="OCS-Back" style={{ width: "100%" }} />
            <div className="container">
              <h4>
                <b>Back</b>
              </h4>
              <p className="pblue"></p>
            </div>
          </div>
        </div>
      </div>
      <div className="item span2 cblack w90">
        Key Features:
        <br />
        &nbsp;
        <ol>
          <li>
            <b>Versatile Installation:</b> This sensor is ideal for mounting on
            door jambs or walkway openings, making it easy to track occupancy.
          </li>
          <li>
            <b>Compact Design:</b> With a maximum door opening width of 40
            inches, our sensor seamlessly integrates into your existing
            infrastructure.
          </li>
          <li>
            <b>Precise Occupancy Tracking:</b> As individuals pass back and
            forth in front of the sensor, it accurately counts the number of
            people within the defined "room" area.
          </li>
          <li>
            <b>Reliable Operation:</b> The sensor operates by closing the&nbsp;
            <span className="highlight">N/O</span> and&nbsp;
            <span className="highlight">C</span> solid-state relay contactors
            while opening the connectivity between the&nbsp;
            <span className="highlight">N/C</span> and&nbsp;
            <span className="highlight">C</span> contactors. It maintains this
            configuration as long as it detects one or more people, ensuring
            uninterrupted monitoring.
          </li>
        </ol>
      </div>

      <div className="item"></div>
      <div className="item"></div>
      <div className="item span3 cblack">
        <p className="cblack">
          The sensor should be mounted to ensure it covers the path from&nbsp;
          <span className="highlight">U2</span>&nbsp; (laser sensor) to&nbsp;
          <span className="highlight">U1</span> (laser sensor). Once it is
          securely mounted, provide a regulated 9-12V DC power supply to&nbsp;
          <span className="highlight">+</span> and&nbsp;
          <span className="highlight">-</span>. When it is initially powered on
          (please ensure the doorway is unobstructed), the sensor will
          automatically detect its environment and be ready to count people
          after a brief boot-up time. <span className="highlight">LED1</span>{" "}
          (indicator light) will flash at regular one-second intervals to
          indicate an unoccupied room, while the number of short bursts of
          flashes will indicate the number of people in the room at any given
          time.
        </p>
        Compatible with Lutron Radio RA3, Lutron Homeworks, Control4 systems,
        and any other systems that utilize N/O (Normally Open) and/or N/C
        (Normally Closed) inputs.
      </div>
      <div className="item"></div>
    </div>
  );
};

export default Main;
