import React from "react";
import "./not.css";

function NotFound() {
  return (
    <>
      <a>
        <header className="top-header"></header>
        {/*dust particel*/}
        <div>
          <div className="starsec" />
          <div className="starthird" />
          <div className="starfourth" />
          <div className="starfifth" />
        </div>
        {/*Dust particle end-*/}
        <div className="lamp__wrap">
          <div className="lamp">
            <div className="cable" />
            <div className="cover" />
            <div className="in-cover">
              <div className="bulb" />
            </div>
            <div className="light" />
          </div>
        </div>
        {/* END Lamp */}
      </a>
      <section className="error">
        <a>{/* Content */}</a>
        <div className="error__content">
          <a>
            <div className="error__message message">
              <h1 className="message__title">Page Not Found</h1>
              <p className="message__text"> We're sorry, the page you were looking for isn't found here. The link you followed may either be broken or no longer exists. Please try again, or take a look at our.
              </p>
            </div>
          </a>
          <div className="error__nav e-nav"><a href=""></a>
            <a className="e-nav__link" />
          </div>
        </div>
        {/* END Content */}
      </section>
    </>
  );
}

export default NotFound;
