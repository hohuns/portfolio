import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio3.png";
import IMG2 from "../../assets/portfolio1.png";
import IMG3 from "../../assets/portfolio2.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";
import IMG7 from "../../assets/portfolio7.png";
import IMG8 from "../../assets/portfolio8.png";
import IMG9 from "../../assets/portfolio9.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG7} alt="" className="portfolio_item-image" />
          <h3>All Projects</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://hohuns17.notion.site/d0f4974c1ab64db09ac2d6f5604eaaa6?v=c9bbc5159f04434d8d03e27d92afffb1"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Show all projects
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG9} alt="" className="portfolio_item-image" />
          <h3>(👨‍💻)Hans Template</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://hohuns17.notion.site/HANS-TEMPLATE-1618be2f46734adbad1468e130b6950b"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Project Info
            </a>
            <a
              href="https://hohuns.github.io/Hans-Template/#/home"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG8} alt="" className="portfolio_item-image" />
          <h3>Warehouse Execution System</h3>
          <div className="portfolio__item-cta">
            <a
              className="btn"
              target="_blank"
              rel="noreferrer"
              onClick={() => alert("Currently working on this project. 🤠")}
            >
              Project Info
            </a>
            <a
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
              onClick={() => alert("Currently working on this project. 🤠")}
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG1} alt="" className="portfolio_item-image" />
          <h3>(👨‍💻)echoMe</h3>
          <div className="portfolio__item-cta">
            <a
              className="btn"
              target="_blank"
              rel="noreferrer"
              href="https://hohuns17.notion.site/EchoMe-Warehouse-Management-System-56a3e78f553d46998076663498ee9794"
            >
              Project Info
            </a>
            <a
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                alert(
                  "This cannot be demonstrated due to assets of my company. Plaase watch project info for details. 🫡"
                )
              }
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG2} alt="" className="portfolio_item-image" />
          <h3>(👨‍💻)InterLogger v3</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://hohuns17.notion.site/Website-implementation-InternetLogger-3-454d48eeb61b4c0e8b04fe49e325d0b1"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Project Info
            </a>
            <a
              href="https://hohuns.github.io/InternetLogger3/#/login"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG3} alt="" className="portfolio_item-image" />
          <h3>(👨‍💻)InterLogger v2</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://hohuns17.notion.site/Website-implementation-InternetLogger-2-4673ea3902eb4294817f67cffe552812"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Project Info
            </a>
            <a
              href="https://hohuns.github.io/InternetLogger2/#/login"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG4} alt="" className="portfolio_item-image" />
          <h3>(👨‍💻)Hans Agency</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://hohuns17.notion.site/Website-implementation-Financial-Agency-Website-50eeb44ae2ef419ea841c363a873f2f8"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Project Info
            </a>
            <a
              href="https://hohuns.github.io/Finanacial-agency/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG6} alt="" className="portfolio_item-image" />
          <h3>(📱)Live Weather</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://hohuns17.notion.site/Android-Application-Live-Weather-59de78ae7dc3485cbe1f935a625267a9"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Project Info
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.sj.liveweather"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG5} alt="" className="portfolio_item-image" />
          <h3>(📱)Secret exercise of Anti-aging</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://hohuns17.notion.site/Android-Application-Final-Year-Project-Secret-exercise-of-Anti-aging-7c52fe5b77634fd08c649d4c4c57eedd"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Project Info
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.SJ.secretofantiagingbeta"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
