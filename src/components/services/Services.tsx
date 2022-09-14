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
              <p className="service__list-date">February 2022 - current</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Created and maintained front-end code for warehouse management
                websites (Inbound, Outbound, Asset management etc.) with
                React.js with Mui 5, keycloak.js, React-datagrid.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Identified and implemented dynamic web solutions in accordance
                to company standards and best practices.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Assisted the development team in developing sites with testing,
                deployment, and updates.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>ST ENGINEERING (Hong Kong) Ltd, Hong Kong</h3>
          </div>
          <ul className="service__list">
            <li>
              <p className="service__list-date">June 2021 - August 2021</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Work as Software development Intern to support 4GMS
                Project(Fourth Generation Mobilising System) in Hong Kong Fire
                Services Department
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Assisted the development team in maintaining websites.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Conducted research and assisted with new UI/UX design for
                website.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>LEXIWAVE Technology (Hong Kong) Ltd, Hong Kong</h3>
          </div>
          <ul className="service__list">
            <li>
              <p className="service__list-date">January 2020 - May 2020</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Used Python, OpenCV to receive data from a MIMO Radar module
                Yolov3 and Retina-net.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Applied CNN Machine Learning Algorithm</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
