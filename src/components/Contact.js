import React from "react";

const Contact = () => {
  return (
    <div class="card-deck">
      <div class="card">
        <img
          src="./images/linkedin-600x300.png"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <p class="card-text">My professional profile on LinkedIn.</p>
          <a
            href="https://www.linkedin.com/in/eric-rydberg-6657043/"
            class="stretched-link"
          ></a>
        </div>
      </div>
      <div class="card">
        <img src="../images/github.png" class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">Take a look at some of the code I've done.</p>
        </div>
        <a href="https://github.com/djericj" class="stretched-link"></a>
      </div>
      <div class="card">
        <img src="./images/stackoverflow.png" class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">
            Questions, answers and interaction with the developer community.
          </p>
        </div>
        <a
          href="https://stackoverflow.com/users/10255368/eric-j"
          class="stretched-link"
        ></a>
      </div>
    </div>
  );
};

export default Contact;
