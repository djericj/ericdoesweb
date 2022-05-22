import React from "react";

const Contact = () => {
  return (
    <div className="card-deck">
      <div className="card">
        <a
          href="https://www.linkedin.com/in/eric-rydberg/"
          target="_new"
          className="stretched-link"
        >
          <img
            src="./images/linkedin-600x300.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              My professional profile on LinkedIn. Message me there.
            </p>
          </div>
        </a>
      </div>
      <div className="card">
        <a
          href="https://github.com/djericj"
          target="_new"
          className="stretched-link"
        >
          <img src="../images/github.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Take a look at some of the code I've done.
            </p>
          </div>
        </a>
      </div>
      <div className="card">
        <a
          href="https://stackoverflow.com/users/10255368/eric-j"
          target="_new"
          className="stretched-link"
        >
          <img
            src="./images/stackoverflow.png"
            className="card-img-top"
            style={{
              paddingTop: "25px",
              maxWidth: "75%",
              margin: "0 auto",
              position: "absolute",
              left: "12%",
              top: "10%",
            }}
            alt="..."
          />
          <div className="card-body">
            <p
              className="card-text"
              style={{
                position: "absolute",
                bottom: "7%",
              }}
            >
              Questions, answers and interaction with the developer community.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
