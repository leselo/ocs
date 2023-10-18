import React from "react";
import oscf from "./images/OCSF.png";
import oscb from "./images/OCSB.png";
import "./css/App.css";
// Main (default) page used as OCS
// uses diaplay: GRID
const Main = () => {
  return (
    <>
      <div>
        <div style={{ background: "inherit", padding: "40px" }}></div>

        <div className="about">
          <div className="bgw50cb">
            <p>
              Experience a new level of efficiency and convenience with our
              automatic Occupancy Counter Sensor. Stay in control of occupancy
              levels effortlessly and enhance safety in your space.
              <br />
              Introducing our state-of-the-art automatic Occupancy Counter
              Sensor, designed to revolutionize the way you monitor and manage
              occupancy levels. This advanced sensor seamlessly toggles between{" "}
              <span className="highlight">N/O</span> (Normally Open),{" "}
              <span className="highlight">C</span> (Common), and{" "}
              <span className="highlight">N/C</span> (Normally Closed)
              positions, providing real-time data on the number of people
              passing by. Mounted on the door jamb or walkway opening, it
              ensures that anyone in front of the sensor is accurately counted.
              Say goodbye to the days of "Last person shut-off the lights.
              signs."
            </p>
            <div
              style={{ display: "flex", width: "100%", background: "inherit" }}
            >
              <div style={{ width: "50%" }}>
                <div className="item">
                  <div className="card">
                    <img src={oscf} alt="OCS-Front" style={{ width: "100%" }} />
                    <div className="container">
                      <h4>
                        <b>Front</b>
                      </h4>
                    </div>
                  </div>
                </div>
                <span style={{ color: "black", fontSize: "0.8em" }}>
                  Direction into the room: Right to Left (from U2 to U1)
                </span>
                <br />
              </div>
              <div style={{ width: "50%" }}>
                <div className="item">
                  <div className="card" style={{ float: "right" }}>
                    <img
                      src={oscb}
                      alt="OCS-Back"
                      style={{ float: "right", width: "100%" }}
                    />
                    <div className="container">
                      <h4>
                        <b>Back</b>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p>
              <p className="cblack">
                The sensor should be mounted to ensure it covers the path
                from&nbsp;
                <span className="highlight">U2</span>&nbsp; (laser sensor)
                to&nbsp;
                <span className="highlight">U1</span> (laser sensor). Once it is
                securely mounted, provide a regulated 9-12V DC power supply
                to&nbsp;
                <span className="highlight">+</span> and&nbsp;
                <span className="highlight">-</span>. When it is initially
                powered on (please ensure the doorway is unobstructed), the
                sensor will automatically detect its environment and be ready to
                count people after a brief boot-up time.{" "}
                <span className="highlight">LED1</span> (indicator light) will
                flash at regular one-second intervals to indicate an unoccupied
                room, while the number of short bursts of flashes will indicate
                the number of people in the room at any given time.
              </p>
            </p>
            <p>
              Compatible with Lutron Radio RA3, Lutron Homeworks, Control4
              systems, and any other systems that utilize N/O (Normally Open)
              and/or N/C (Normally Closed) inputs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
