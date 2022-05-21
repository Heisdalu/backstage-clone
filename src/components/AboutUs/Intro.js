/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <>
      <footer className="intro_section">
        <section className="intro_text">
          <p>
            Backstage Talks is a magazine of casual, but in depth dialogues on
            design and business. Our decisions shape and influence this complex
            world-to have a chance to make the right ones, we need to talk.
          </p>
          <section className="copyright">
            &copy; 2022 <a href="#">Published by studio Milk</a>
          </section>
        </section>

        <section className="privacy_policy">
          <a href="#">Privacy Policy</a>
        </section>
        <section className="email_link">
          <a href="#">info@backstagetalks.com</a>
        </section>
      </footer>
    </>
  );
};

export default Intro;
