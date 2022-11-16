import React from "react";
import "./Contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8d0ycfn",
        "template_jcxendn",
        form.current!,
        "X8CD0ptWfyRwPzdVw"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message is successfully sent.");
        },
        (error) => {
          console.log(error.text);
          alert("Fail to send message.");
        }
      );

    e.target.reset();
  };
  
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>hohuns@hotmail.com</h5>
            <a
              href="mailto:hohuns@hotmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a email
            </a>
          </article>
          <div className="contact__options">
            <article className="contact__option">
              <RiMessengerLine className="contact__option-icon" />
              <h4>Facebook Messenger</h4>
              <h5>JOO SUNG JAE HANS</h5>
              <a
                href="https://m.me/hans.joo.73"
                target="_blank"
                rel="noreferrer"
              >
                Send a messanger
              </a>
            </article>
          </div>
          <div className="contact__options">
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <h5>+85267901714</h5>
              <a
                href="https://api.whatsapp.com/send?phone=85267901714"
                target="_blank"
                rel="noreferrer"
              >
                Send a whatsapp
              </a>
            </article>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
