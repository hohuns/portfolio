import "./Services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>Where did I worked</h5>
      <h2>Working Experience</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Protek Technology Ltd, Hong Kong</h3>
          </div>
          <ul className="service__list">
            <li>
              <p className="service__list-date">February 2022 - Present</p>
            </li>
            <li>
              <p>
                • Currently In charge of all frontend works layout
                designing/Implementation, API Integration, and adding ,updating,
                maintaining new features.
              </p>
            </li>
            <li>
              <p>
                • Created and maintained web applications for WMS of DFS with
                React/typescript with Mui 5, Keycloak, React-datagrid and Redux.
              </p>
            </li>
            <li>
              <p>
                • Also helping Backend with Node.js/Express and
                mongodb/Mongoose.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>ST ENGINEERING Ltd, Hong Kong</h3>
          </div>
          <ul className="service__list">
            <li>
              <p className="service__list-date">June 2021 - August 2021</p>
            </li>
            <li>
              <p>
                • Worked as Software development Intern to support 4GMS
                Project(Fourth Generation Mobilising System) in Hong Kong Fire
                Services Department
              </p>
            </li>
            <li>
              <p>• Assisted the development team in maintaining websites.</p>
            </li>
            <li>
              <p>
                • Conducted research and assisted with new UI/UX design for
                website.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>LEXIWAVE Technology Ltd, Hong Kong</h3>
          </div>
          <ul className="service__list">
            <li>
              <p className="service__list-date">January 2020 - May 2020</p>
            </li>
            <li>
              <p>• Industrial Pre-Training Program.</p>
            </li>
            <li>
              <p>
                • Used Python, OpenCV, CNN,Yolov3 to anyalze data froma MIMO
                Radar module Yolov3 and Retina-net. for implementing object
                recognition.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
